import React from "react";
import { Platform } from "react-native";

import { Container, Header } from "./styles";

import ButtonBack from "../../components/ButtonBack";

const Order: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Container behavior={behavior}>
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} />
      </Header>
    </Container>
  );
};

export default Order;
