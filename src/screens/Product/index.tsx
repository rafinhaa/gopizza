import React from "react";
import { Platform, TouchableOpacity } from "react-native";

import { Container, Header, Title, DeleteLabel } from "./styles";

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Container behavior={behavior}>
      <Header>
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
    </Container>
  );
};

export default Product;
