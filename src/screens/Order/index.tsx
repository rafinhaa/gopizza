import React, { useState } from "react";
import { Platform } from "react-native";
import { PIZZA_TYPES } from "../../utils/pizzaTypes";

import { Container, Header, Photo, Sizes } from "./styles";

import ButtonBack from "../../components/ButtonBack";
import RadioButton from "../../components/RadioButton";

const Order: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  const [size, setSize] = useState("");

  return (
    <Container behavior={behavior}>
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} />
      </Header>
      <Photo source={{ uri: "https://picsum.photos/240" }} />
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
    </Container>
  );
};

export default Order;
