import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../hooks/auth";

import OrderCard, { OrderProps } from "../../components/OrderCard";
import { Separator } from "../../components/ItemSeparation/styles";

import { Container, Header, Title } from "./styles";

const Order: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    const subscriber = firestore()
      .collection("orders")
      .where("waiter_id", "==", user.id)
      .onSnapshot((querySnapshot) => {
        const orders = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }) as OrderProps[];
        setOrders(orders);
      });

    return () => subscriber();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Pedidos Feitos</Title>
      </Header>
      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <OrderCard index={index} data={item} />
        )}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};

export default Order;
