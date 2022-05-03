import React, { useState, useCallback } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

import Search from "../../components/Search";
import ProductCard, { ProductProps } from "../../components/ProductCard";

import happyEmoji from "../../assets/happy.png";

import {
  Container,
  Header,
  IconsWrapper,
  Greeting,
  GreetingEmoji,
  GreetingText,
  LogOutIcon,
  MenuHeader,
  MenuItensNumber,
  Title,
  PizzasList,
  StoveIcon,
  NewProductButton,
} from "./styles";

const Home: React.FC = () => {
  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const pizzasLength =
    pizzas.length > 1 ? `${pizzas.length} pizzas` : `${pizzas.length} pizza`;
  const { user, signOut } = useAuth();
  const isAdmin = user?.isAdmin;

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
    const route = isAdmin ? "Product" : "Order";
    navigation.navigate(route, { id });
  };

  const handleAddProduct = () => {
    navigation.navigate("Product", {});
  };

  const goToChangeOrdersStatus = () => {
    navigation.navigate("ChangerOrders");
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
          <GreetingText>Olá! {user.name} </GreetingText>
        </Greeting>
        <IconsWrapper>
          {isAdmin && (
            <BorderlessButton onPress={goToChangeOrdersStatus}>
              <StoveIcon />
            </BorderlessButton>
          )}
          <BorderlessButton onPress={signOut}>
            <LogOutIcon />
          </BorderlessButton>
        </IconsWrapper>
      </Header>
      <Search
        onChangeText={setSearch}
        value={search}
        onSearch={handleSearch}
        onClear={handleSearchClear}
      />
      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItensNumber>{pizzasLength}</MenuItensNumber>
      </MenuHeader>

      <PizzasList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard data={item} onPress={() => handleOpenProduct(item.id)} />
        )}
      />
      {user?.isAdmin && (
        <NewProductButton
          title="Cadastrar Pizza"
          type="secondary"
          onPress={handleAddProduct}
        />
      )}
    </Container>
  );
};

export default Home;
