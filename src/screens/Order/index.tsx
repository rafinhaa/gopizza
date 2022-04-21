import React from "react";
import { Platform } from "react-native";

import { Container, Header, Photo, Sizes } from "./styles";

import ButtonBack from "../../components/ButtonBack";
import RadioButton from "../../components/RadioButton";

const Order: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Container behavior={behavior}>
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} />
      </Header>
      <Photo source={{ uri: "https://picsum.photos/240" }} />
      <Sizes>
        <RadioButton title="Pequeno" selected />
      </Sizes>
    </Container>
  );
};

export default Order;
