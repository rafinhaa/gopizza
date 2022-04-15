import React from "react";

import { BorderlessButton } from "react-native-gesture-handler";

import Search from "../../components/Search";

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
    </Container>
  );
};

export default Home;
