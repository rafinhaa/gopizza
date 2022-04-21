import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Radio, RadioButtonProps, Selected, Title } from "./styles";

type RadioProps = TouchableOpacityProps &
  RadioButtonProps & {
    title: string;
  };

const RadioButton: React.FC<RadioProps> = ({
  title,
  selected = false,
  ...rest
}) => {
  const RadioInternal = () => {
    return <Radio>{selected && <Selected />}</Radio>;
  };

  return (
    <Container selected={selected} {...rest}>
      <RadioInternal />
      <Title>{title}</Title>
    </Container>
  );
};

export default RadioButton;
