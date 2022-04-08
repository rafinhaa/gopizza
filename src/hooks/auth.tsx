import React, { createContext, useContext, ReactNode, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

const AuthContext = createContext({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLogging, setIsLogging] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (email: string, senha: string) => {
    if (!email || !senha) {
      return Alert.alert("Login", "Informe o e-mail e a senha");
    }
    setIsLogging(true);
    auth()
      .signInWithEmailAndPassword(email, senha)
      .then((account) => {
        firestore()
          .collection("users")
          .doc(account.user.uid)
          .get()
          .then((profile) => {
            const { name, isAdmin } = profile.data() as User;
            if (profile.exists) {
              setUser({ id: account.user.uid, name, isAdmin });
            }
          })
          .catch(() => {
            Alert.alert("Login", "Erro ao carregar o perfil");
          });
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
    <AuthContext.Provider value={{ signIn, isLogging, user }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
