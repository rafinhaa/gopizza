import React from "react";
import { TextInputProps } from "react-native";

import { Container, InputProps } from "./styles";

type TextProps = TextInputProps & {
  type?: InputProps;
};
const Input: React.FC<TextProps> = ({ type = "primary", ...rest }) => {
  console.log(type);
  return <Container type={type} {...rest}></Container>;
};

export default Input;
