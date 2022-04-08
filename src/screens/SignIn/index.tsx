import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { useAuth } from "../../hooks/auth";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isLogging } = useAuth();

  const handleSignIn = () => {
    signIn(email, password);
  };

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
            onChangeText={setEmail}
          />
          <Input
            placeholder="Senha"
            type="secondary"
            secureTextEntry
            onChangeText={setPassword}
          />
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
          </ForgotPasswordButton>
          <Button
            title="Entrar"
            type="secondary"
            onPress={handleSignIn}
            isLoading={isLogging}
          />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
