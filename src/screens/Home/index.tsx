import React, { useState, useCallback } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

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
  NewProductButton,
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

  const handleAddProduct = () => {
    navigation.navigate("Product", {});
  };

  useFocusEffect(
    useCallback(() => {
      fetchPizzas("");
    }, [])
  );

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
      <NewProductButton
        title="Cadastrar Pizza"
        type="secondary"
        onPress={handleAddProduct}
      />
    </Container>
  );
};

export default Home;
