import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/auth";

import { UserStackRoutes } from "./user.stack.routes";
import SignIn from "../screens/SignIn";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Routes = () => {
  const { user } = useAuth();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {user ? <UserStackRoutes /> : <SignIn />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export { Routes };
