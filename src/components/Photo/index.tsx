import React from "react";

import { Image, Placeholder, PlaceholderText } from "./styles";

type PhotoProps = {
  uri: string | null;
};

const Photo: React.FC<PhotoProps> = ({ uri }) => {
  if (uri) {
    return <Image source={{ uri }} />;
  }

  return (
    <Placeholder>
      <PlaceholderText>Nenhuma foto carregada</PlaceholderText>
    </Placeholder>
  );
};

export default Photo;
