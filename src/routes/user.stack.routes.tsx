import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/auth";

import Home from "../screens/Home";
import Product from "../screens/Product";
import Order from "../screens/Order";

import { UserTabRoutes } from "./user.tab.routes";

export type RootStackParamList = {
  Home: undefined;
  Product: { id?: string };
  Order: { id: string };
  Orders: undefined;
  UserTabRoutes: undefined;
};

const { Navigator, Screen, Group } =
  createNativeStackNavigator<RootStackParamList>();

export const UserStackRoutes = () => {
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user?.isAdmin ? (
        <Group>
          <Screen name="Home" component={Home} />
          <Screen name="Product" component={Product} />
        </Group>
      ) : (
        <Group>
          <Screen name="UserTabRoutes" component={UserTabRoutes} />
          <Screen name="Order" component={Order} />
        </Group>
      )}
    </Navigator>
  );
};
