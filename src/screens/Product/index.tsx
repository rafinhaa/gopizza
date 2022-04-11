import React from "react";
import { Platform } from "react-native";

import { Container } from "./styles";

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return <Container behavior={behavior}></Container>;
};

export default Product;
