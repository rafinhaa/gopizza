import React from "react";

import { BorderlessButton } from "react-native-gesture-handler";

import Search from "../../components/Search";
import ProductCard from "../../components/ProductCard";

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
