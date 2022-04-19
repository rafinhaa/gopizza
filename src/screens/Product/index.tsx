import React, { useState, useEffect } from "react";
import {
  Platform,
  TouchableOpacity,
  ScrollView,
  Alert,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import firestore from "@react-native-firebase/firestore";
import storage from "@react-native-firebase/storage";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/user.stack.routes";
import { ProductProps } from "../../components/ProductCard";

import ButtonBack from "../../components/ButtonBack";
import Photo from "../../components/Photo";
import Input from "../../components/Input";
import Button from "../../components/Button";
import InputPrice from "../../components/InputPrice";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacters,
  Form,
} from "./styles";

type ScreenParams = RouteProp<RootStackParamList, "Product">;
type PizzaResponse = ProductProps & {
  photoPath: string;
  prices_sizes: {
    priceP: string;
    priceM: string;
    priceG: string;
  };
};

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  const [image, setImage] = useState("");
  const [photoPath, setPhotoPath] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceP, setPriceP] = useState("");
  const [priceM, setPriceM] = useState("");
  const [priceG, setPriceG] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const {
    params: { id },
  } = useRoute<ScreenParams>();

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status === "granted") {
      const pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
      });
      if (!pickerResult.cancelled) {
        const { uri } = pickerResult as ImageInfo;
        setImage(uri);
      }
    }
  }

  const handleAdd = async () => {
    if (
      !image ||
      !name.trim() ||
      !description.trim() ||
      !priceP ||
      !priceM ||
      !priceG
    ) {
      return Alert.alert("Preencha todos os campos!");
    }

    setIsLoading(true);
    const fileName = new Date().getTime();
    const reference = storage().ref(`pizzas/${fileName}.png`);
    await reference.putFile(image);
    const photoURL = await reference.getDownloadURL();
    firestore()
      .collection("pizzas")
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        prices_sizes: {
          priceP,
          priceM,
          priceG,
        },
        photoURL,
        photoPath: reference.fullPath,
      })
      .then(() => Alert.alert("Pizza cadastrada com sucesso!"))
      .catch(() => Alert.alert("Erro ao cadastrar pizza!"))
      .finally(() => setIsLoading(false));
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDeleteProduct = () => {
    firestore()
      .collection("pizzas")
      .doc(id)
      .delete()
      .then(() => {
        storage()
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate("Home"));
      });
  };

  useEffect(() => {
    if (id) {
      firestore()
        .collection("pizzas")
        .doc(id)
        .get()
        .then((response) => {
          const {
            name,
            description,
            photoURL,
            photoPath,
            prices_sizes: { priceP, priceM, priceG },
          } = response.data() as PizzaResponse;
          setName(name);
          setDescription(description);
          setImage(photoURL);
          setPriceP(priceP);
          setPriceM(priceM);
          setPriceG(priceG);
          setPhotoPath(photoPath);
        });
    }
  }, [id]);

  return (
    <Container behavior={behavior}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack onPress={handleGoBack} />
          <Title>Cadastrar</Title>
          {id ? (
            <TouchableOpacity onPress={handleDeleteProduct}>
              <DeleteLabel>Deletar</DeleteLabel>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 20 }} />
          )}
        </Header>
        <Upload>
          <Photo uri={image} />
          {!id && (
            <PickImageButton
              title="Carregar"
              type="secondary"
              onPress={handlePickerImage}
            />
          )}
        </Upload>
        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input onChangeText={setName} value={name} />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacters>0 de 60 caracteres</MaxCharacters>
            </InputGroupHeader>
            <Input
              multiline
              maxLength={60}
              style={{ height: 80 }}
              onChangeText={setDescription}
              value={description}
            />
          </InputGroup>
          <InputGroup>
            <Label>Tamanhos e preços</Label>
            <InputPrice size="P" onChangeText={setPriceP} value={priceP} />
            <InputPrice size="M" onChangeText={setPriceM} value={priceM} />
            <InputPrice size="G" onChangeText={setPriceG} value={priceG} />
          </InputGroup>
          {!id && (
            <Button
              title="Cadastrar Pizza"
              isLoading={isLoading}
              onPress={handleAdd}
            />
          )}
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Product;
