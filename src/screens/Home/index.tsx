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
    </Container>
  );
};

export default Home;
