import React, { useEffect, useState } from "react";

import { BorderlessButton } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";

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

  useEffect(() => {
    fetchPizzas("");
  }),
    [];

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
      <Search onSearch={() => {}} onClear={() => {}} />
      <MenuHeader>
        <Title>Cardápio</Title>
        <MenuItensNumber>10 pizzas</MenuItensNumber>
      </MenuHeader>

      <PizzasList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard data={item} />}
      />
    </Container>
  );
};

export default Home;
