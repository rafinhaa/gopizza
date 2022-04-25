import React from "react";
import { FlatList } from "react-native";

import OrderCard from "../../components/OrderCard";
import { Separator } from "../../components/ItemSeparation/styles";

import { Container, Header, Title } from "./styles";

const Order: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Pedidos Feitos</Title>
      </Header>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <OrderCard index={item} />}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default Order;
