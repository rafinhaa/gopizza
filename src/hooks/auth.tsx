import React, { createContext, useContext, ReactNode, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  isLogging: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setIsLogging] = useState(false);

  const signIn = async (email: string, senha: string) => {
    if (!email || !senha) {
      return Alert.alert("Login", "Informe o e-mail e a senha");
    }
    setIsLogging(true);
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        console.log("Logado com sucesso");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            Alert.alert("Login", "Usuário ou senha inválidos");
            break;
          case "auth/wrong-password":
            Alert.alert("Login", "Usuário ou senha inválidos");
            break;
          default:
            Alert.alert("Login", "Erro ao fazer login");
            break;
        }
      })
      .finally(() => setIsLogging(false));
  };

  return (
    <AuthContext.Provider value={{ signIn, isLogging }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
