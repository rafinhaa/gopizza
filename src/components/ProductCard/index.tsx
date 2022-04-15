import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";

import {
  Container,
  Content,
  Description,
  Details,
  IconArrow,
  Identification,
  Image,
  Line,
  Name,
} from "./styles";

export type ProductProps = {
  id: string;
  photoURL: string;
  name: string;
  description: string;
};

type ProductCardProps = RectButtonProps & {
  data: ProductProps;
};

const ProductCard: React.FC<ProductCardProps> = ({ data, ...rest }) => {
  return (
    <Container>
      <Content {...rest}>
        <Image source={{ uri: data.photoURL }} />
        <Details>
          <Identification>
            <Name>{data.name}</Name>
            <IconArrow />
          </Identification>
          <Description>{data.description}</Description>
        </Details>
      </Content>
      <Line />
    </Container>
  );
};

export default ProductCard;
