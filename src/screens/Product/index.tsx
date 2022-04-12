import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import ButtonBack from "../../components/ButtonBack";
import Photo from "../../components/Photo";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
} from "./styles";

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Container behavior={behavior}>
      <Header>
        <ButtonBack />
        <Title>Cadastrar</Title>
        <TouchableOpacity>
          <DeleteLabel>Deletar</DeleteLabel>
        </TouchableOpacity>
      </Header>
      <Upload>
        <Photo uri="" />
        <PickImageButton title="Carregar" type="secondary" />
      </Upload>
    </Container>
  );
};

export default Product;
