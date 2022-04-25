import React from "react";
import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Description,
  Image,
  Name,
  StatusContainer,
  StatusLabel,
  StatusTypesProps,
} from "./styles";

type Props = TouchableOpacityProps & {
  index: number;
};

const OrderCard: React.FC<Props> = ({ index, ...rest }) => {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: "https://picsum.photos/200" }} />
      <Name>4 Queijos</Name>
      <Description>Mesa 5 ● Qnt: 1</Description>
      <StatusContainer status="Preparando">
        <StatusLabel status="Preparando">Preparando</StatusLabel>
      </StatusContainer>
    </Container>
  );
};

export default OrderCard;
