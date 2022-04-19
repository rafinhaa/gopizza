import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Product from "../screens/Product";

export type RootStackParamList = {
  Home: undefined;
  Product: { id?: string };
  Order: { id: string };
  Orders: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const UserStackRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Product" component={Product} />
    </Navigator>
  );
};