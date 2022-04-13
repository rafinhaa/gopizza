import React from "react";
import { TextInputProps } from "react-native";

import { Container, Size, Label, Input } from "./styles";

type InputProps = TextInputProps & {
  size: "P" | "M" | "G";
};

const InputPrice: React.FC<InputProps> = ({ size, ...rest }) => {
  return (
    <Container>
      <Size>
        <Label>{size}</Label>
      </Size>
      <Label>R$</Label>
      <Input keyboardType="numeric" {...rest} />
    </Container>
  );
};

export default InputPrice;
