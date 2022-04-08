import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

import brandImg from "../../assets/brand.png";

import Button from "../../components/Button";
import Input from "../../components/Input";

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";

const SignIn: React.FC = () => {
  const behavior = Platform.OS === "ios" ? "padding" : undefined;

  return (
    <Container>
      <KeyboardAvoidingView behavior={behavior}>
        <Content>
          <Brand source={brandImg} />
          <Title>Login</Title>
          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" type="secondary" secureTextEntry />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
