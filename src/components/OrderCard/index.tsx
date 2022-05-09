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

export type OrderProps = {
  id: string;
  pizza: string;
  image: string;
  status: StatusTypesProps;
  table_number: number;
  quantity: string;
};

type Props = TouchableOpacityProps & {
  index: number;
  data: OrderProps;
};

const OrderCard: React.FC<Props> = ({ index, data, ...rest }) => {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: data.image }} />
      <Name>{data.pizza}</Name>
      <Description>
        Mesa {data.table_number} ● Qnt: {data.quantity}
      </Description>
      <StatusContainer status={data.status}>
        <StatusLabel status={data.status}>{data.status}</StatusLabel>
      </StatusContainer>
    </Container>
  );
};

export default OrderCard;
