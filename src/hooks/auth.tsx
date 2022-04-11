import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  signOut: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

const USER_COLLECTION = "@gopizza:users";

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
          .then(async (profile) => {
            const { name, isAdmin } = profile.data() as User;
            if (profile.exists) {
              const userData = { id: account.user.uid, name, isAdmin };
              await AsyncStorage.setItem(
                USER_COLLECTION,
                JSON.stringify(userData)
              );
              setUser(userData);
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

  const signOut = async () => {
    await auth().signOut();
    await AsyncStorage.removeItem(USER_COLLECTION);
    setUser(null);
  };

  const forgotPassword = async (email: string) => {
    if (!email) {
      return Alert.alert("Esqueci a senha", "Informe o e-mail");
    }
    setIsLogging(true);
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert("Esqueci a senha", "Verifique sua caixa de e-mail");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/user-not-found":
            Alert.alert("Esqueci a senha", "Usuário não encontrado");
            break;
          default:
            Alert.alert("Esqueci a senha", "Erro ao enviar e-mail");
            break;
        }
      });
    setIsLogging(false);
  };

  const loadUserStorageData = async () => {
    setIsLogging(true);
    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as User;
      setUser(userData);
    }
    setIsLogging(false);
  };

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, forgotPassword, isLogging, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
