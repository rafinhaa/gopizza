import React, { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";

import OrderCard, { OrderProps } from "../../components/OrderCard";
import { Separator } from "../../components/ItemSeparation/styles";

import { Container, Header, HeaderLastView, Title } from "./styles";
import ButtonBack from "../../components/ButtonBack";
import { useNavigation } from "@react-navigation/native";

const ChangeOrders: React.FC = () => {
  const [orders, setOrders] = useState<OrderProps[]>([]);
  const navigation = useNavigation();

  const changeOrder = (id: string, status: string) => {
    firestore().collection("orders").doc(id).update({
      status,
    });
  };

  const handleChangeStatus = (id: string) => {
    Alert.alert(
      "Alterar status do pedido",
      "Deseja alterar o status do pedido?",
      [
        {
          text: "Cancelar",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Preparando",
          onPress: () => changeOrder(id, "Preparando"),
        },
        {
          text: "Pronto",
          onPress: () => changeOrder(id, "Pronto"),
        },
        {
          text: "Entregue",
          onPress: () => changeOrder(id, "Entregue"),
        },
      ],
      { cancelable: false }
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection("orders")
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
        <ButtonBack onPress={goBack} />
        <Title>Cozinha</Title>
        <HeaderLastView />
      </Header>
      <FlatList
        data={orders}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <OrderCard
            index={index}
            data={item}
            onPress={() => handleChangeStatus(item.id)}
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

export default ChangeOrders;
