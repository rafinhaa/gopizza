import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

const ButtonBack: React.FC<TouchableOpacityProps> = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
    </Container>
  );
};

export default ButtonBack;
