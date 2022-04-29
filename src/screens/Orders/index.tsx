import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { useAuth } from "../../hooks/auth";

import OrderCard, { OrderProps } from "../../components/OrderCard";
import { Separator } from "../../components/ItemSeparation/styles";

import { Container, Header, Title } from "./styles";

const Order: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<OrderProps[]>([]);

  const handlePizzaDelivered = (id: string) => {
    Alert.alert("Pedido", "Confirma que o pedido foi entregue?", [
      {
        text: "Não",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => {
          firestore().collection("orders").doc(id).update({
            status: "Entregue",
          });
        },
      },
    ]);
  };

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
          <OrderCard
            index={index}
            data={item}
            disabled={item.status === "Entregue"}
            onPress={() => handlePizzaDelivered(item.id)}
          />
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
