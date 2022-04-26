import React from "react";
import { View } from "react-native";

import { Container, Notification, Quantity, Title } from "./styles";

type Props = {
  title: string;
  color: string;
  notifications?: string | undefined;
};

const BottomMenu: React.FC<Props> = ({ title, color, notifications }) => {
  const noNotification = notifications === "0";
  return (
    <Container>
      <Title color={color}>{title}</Title>
      {notifications && (
        <Notification noNotifications={noNotification}>
          <Quantity noNotifications={noNotification}>{notifications}</Quantity>
        </Notification>
      )}
    </Container>
  );
};

export default BottomMenu;
