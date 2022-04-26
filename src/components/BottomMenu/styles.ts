import { Colors } from "react-native/Libraries/NewAppScreen";
import styled, { css } from "styled-components/native";

type TitleProps = {
  color: string;
};

type NotificationProps = {
  noNotifications: boolean;
};

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 18px;
  ${({ theme: { FONTS }, color }) => css`
    font-family: ${FONTS.TITLE};
    colorL ${color};
  `};
`;

export const Notification = styled.View<NotificationProps>`
  height: 20px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  margin-left: 8px;
  ${({ theme: { COLORS }, noNotifications }) =>
    !noNotifications &&
    css`
      background-color: ${COLORS.SUCCESS_900};
    `}

  ${({ theme: { COLORS }, noNotifications }) =>
    noNotifications &&
    css`
      background-color: transparent;
      border: 1px solid ${COLORS.SHAPE};
    `}
`;

export const Quantity = styled.Text<NotificationProps>`
  font-size: 12px;
  ${({ theme: { COLORS, FONTS }, noNotifications }) => css`
    font-family: ${FONTS.TEXT};
    color: ${noNotifications ? COLORS.SECONDARY_500 : COLORS.TITLE};
  `};
`;
