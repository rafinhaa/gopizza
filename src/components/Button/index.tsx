import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title, Load, ButtonProps } from "./styles";

type RectProps = RectButtonProps & {
  title: string;
  type?: ButtonProps;
  isLoading?: boolean;
};

const Button: React.FC<RectProps> = ({
  title,
  type = "primary",
  isLoading = false,
  ...rest
}) => {
  return (
    <Container type={type} enabled={!isLoading} {...rest}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
};

export default Button;
