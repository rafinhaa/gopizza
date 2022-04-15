import React, { useEffect } from "react";

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
} from "./styles";

const Home: React.FC = () => {
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
        console.log(data);
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
      <ProductCard
        data={{
          id: "1",
          photo_url: "https://picsum.photos/200",
          name: "Pizza de Mussarela",
          description: "Pizza mussarela com molho de tomate e mussarela",
        }}
      />
    </Container>
  );
};

export default Home;
