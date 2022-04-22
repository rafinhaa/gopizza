import React, { useState } from "react";
import { Platform } from "react-native";
import { PIZZA_TYPES } from "../../utils/pizzaTypes";

import {
  Container,
  Header,
  Photo,
  Sizes,
  Form,
  FormRow,
  InputGroup,
  Label,
  Price,
  Title,
  ContentScroll,
} from "./styles";

import ButtonBack from "../../components/ButtonBack";
import RadioButton from "../../components/RadioButton";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Order: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  const [size, setSize] = useState("");

  return (
    <Container behavior={behavior}>
      <ContentScroll>
        <Header>
          <ButtonBack style={{ marginBottom: 108 }} />
        </Header>
        <Photo source={{ uri: "https://picsum.photos/240" }} />
        <Form>
          <Title>Nome da pizza</Title>
          <Label>Selecione o tamanho</Label>
          <Sizes>
            {PIZZA_TYPES.map(({ id, name }) => (
              <RadioButton
                key={id}
                title={name}
                selected={size === id}
                onPress={() => setSize(id)}
              />
            ))}
          </Sizes>
          <FormRow>
            <InputGroup>
              <Label>Número da mesa</Label>
              <Input keyboardType="numeric" />
            </InputGroup>

            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType="numeric" />
            </InputGroup>
          </FormRow>
          <Price>Valor de R$ 00,00</Price>
          <Button title="Confirmar pedido" />
        </Form>
      </ContentScroll>
    </Container>
  );
};

export default Order;
