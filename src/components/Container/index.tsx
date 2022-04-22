import React, { ReactNode } from "react";
import { Platform } from "react-native";

import { ContentContainer, ContentScroll, ContentScrollProps } from "./styles";

type ContainerProps = ContentScrollProps & {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, backgroundColor }) => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  return (
    <ContentContainer behavior={behavior}>
      <ContentScroll backgroundColor={backgroundColor}>
        {children}
      </ContentScroll>
    </ContentContainer>
  );
};

export default Container;
