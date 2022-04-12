import React, { useState } from "react";
import { Platform, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";

import ButtonBack from "../../components/ButtonBack";
import Photo from "../../components/Photo";

import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
} from "./styles";

const Product: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  const [image, setImage] = useState("");

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

  return (
    <Container behavior={behavior}>
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
    </Container>
  );
};

export default Product;
