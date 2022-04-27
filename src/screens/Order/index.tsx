import React, { useState, useEffect } from "react";
import { PIZZA_TYPES } from "../../utils/pizzaTypes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import firestore from "@react-native-firebase/firestore";
import { RootStackParamList } from "../../routes/user.stack.routes";
import { Alert } from "react-native";

import {
  Header,
  Photo,
  Sizes,
  Form,
  FormRow,
  InputGroup,
  Label,
  Price,
  Title,
} from "./styles";

import ButtonBack from "../../components/ButtonBack";
import RadioButton from "../../components/RadioButton";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { ProductProps } from "../../components/ProductCard";

type ScreenParams = RouteProp<RootStackParamList, "Order">;
type PizzaResponse = ProductProps & {
  prices_sizes: {
    [key: string]: number;
  };
};

const Order: React.FC = () => {
  const [size, setSize] = useState("");
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, setTableNumber] = useState("");
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute<ScreenParams>();
  const amount = size ? pizza.prices_sizes[size] * quantity : "0,00";

  useEffect(() => {
    if (id) {
      firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => {
          console.log(response.data());
          setPizza(response.data() as PizzaResponse);
        })
        .catch((error) =>
          Alert.alert("Erro ao carregar o produto", error.message)
        );
    }
  }, [id]);

  return (
    <Container backgroundColor="BACKGROUND">
      <Header>
        <ButtonBack style={{ marginBottom: 108 }} onPress={navigation.goBack} />
      </Header>
      <Photo source={{ uri: pizza.photoURL }} />
      <Form>
        <Title>{pizza.name}</Title>
        <Label>Selecione o tamanho</Label>
        <Sizes>
          {PIZZA_TYPES.map(({ id, name }) => (
            <RadioButton
              key={id}
              title={name}
              selected={size === id}
              onPress={() => setSize(id)}
            />
          ))}
        </Sizes>
        <FormRow>
          <InputGroup>
            <Label>Número da mesa</Label>
            <Input keyboardType="numeric" onChangeText={setTableNumber} />
          </InputGroup>

          <InputGroup>
            <Label>Quantidade</Label>
            <Input
              keyboardType="numeric"
              onChangeText={(value) => setQuantity(Number(value))}
            />
          </InputGroup>
        </FormRow>
        <Price>Valor de R$ {amount}</Price>
        <Button title="Confirmar pedido" />
      </Form>
    </Container>
  );
};

export default Order;
