import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import firestore from "@react-native-firebase/firestore";

import Home from "../screens/Home";
import Orders from "../screens/Orders";
import BottomMenu from "../components/BottomMenu";
import { useAuth } from "../hooks/auth";

const { Navigator, Screen } = createBottomTabNavigator();

export const UserTabRoutes = () => {
  const { COLORS } = useTheme();
  const [notifications, setNotifications] = useState("0");
  const { user } = useAuth();

  useEffect(() => {
    const subscriber = firestore()
      .collection("orders")
      .where("waiter_id", "==", user.id)
      .where("status", "==", "Pronto")
      .onSnapshot((querySnapshot) => {
        setNotifications(querySnapshot.docs.length.toString());
      });

    return () => subscriber();
  }, []);

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.SECONDARY_900,
        tabBarInactiveTintColor: COLORS.SECONDARY_400,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu title="Cardápio" color={color} />
          ),
        }}
      />
      <Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu
              title="Pedidos"
              color={color}
              notifications={notifications}
            />
          ),
        }}
      />
    </Navigator>
  );
};
