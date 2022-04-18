import React, { useEffect, useState } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import Search from "../../components/Search";
import ProductCard, { ProductProps } from "../../components/ProductCard";

import happyEmoji from "../../assets/happy.png";

import {
  Container,
  Header,
  Greeting,
  GreetingEmoji,
  GreetingText,
  LogOutIcon,
  MenuHeader,
  MenuItensNumber,
  Title,
  PizzasList,
} from "./styles";

const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const fetchPizzas = (value: string) => {
    const formattedValue = value.toLowerCase().trim();
    firestore()
      .collection("pizzas")
      .orderBy("name_insensitive")
      .startAt(formattedValue)
      .endAt(formattedValue + "\uf8ff")
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setPizzas(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  };

  const handleSearch = () => {
    fetchPizzas(search);
  };

  const handleSearchClear = () => {
    setSearch("");
    fetchPizzas("");
  };

  const handleOpenProduct = (id: string) => {
    navigation.navigate("Product", { id });
  };

  useEffect(() => {
    fetchPizzas("");
  }, []);

  return (
    <Container>
      <Header>
        <Greeting>
          <GreetingEmoji source={happyEmoji} />
          <GreetingText>Olá! Admin </GreetingText>
        </Greeting>
        <BorderlessButton>
          <LogOutIcon />
        </BorderlessButton>
      </Header>
      <Search
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />
      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItensNumber>10 pizzas</MenuItensNumber>
      </MenuHeader>

      <PizzasList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard data={item} onPress={() => handleOpenProduct(item.id)} />
        )}
      />
    </Container>
  );
};

export default Home;
