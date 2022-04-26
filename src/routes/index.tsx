import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { UserStackRoutes } from "./user.stack.routes";
import { UserTabRoutes } from "./user.tab.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Routes = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <UserTabRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export { Routes };
