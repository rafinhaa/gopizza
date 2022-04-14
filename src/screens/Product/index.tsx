import React, { useState } from "react";
import { Platform, TouchableOpacity, ScrollView, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import ButtonBack from "../../components/ButtonBack";
import Photo from "../../components/Photo";
import Input from "../../components/Input";
import Button from "../../components/Button";

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
import InputPrice from "../../components/InputPrice";

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priceP, setPriceP] = useState("");
  const [priceM, setPriceM] = useState("");
  const [priceG, setPriceG] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
  };

  return (
    <Container behavior={behavior}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Cadastrar</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <Upload>
          <Photo uri={image} />
          <PickImageButton
            title="Carregar"
            type="secondary"
            onPress={handlePickerImage}
          />
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
          <Button
            title="Cadastrar Pizza"
            isLoading={isLoading}
            onPress={handleAdd}
          />
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Product;
