import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export type ButtonProps = "primary" | "secondary";

type ContainerProps = {
  type: ButtonProps;
};

export const Container = styled(RectButton)<ContainerProps>`
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { COLORS }, type }) =>
    type === "primary" ? COLORS.SUCCESS_900 : COLORS.PRIMARY_800};
`;

export const Title = styled.Text`
  font-size: 14px;
  ${({ theme: { COLORS, FONTS } }) => css`
    color: ${COLORS.TITLE};
    font-family: ${FONTS.TEXT};
  `}
`;

export const Load = styled.ActivityIndicator.attrs(({ theme: { COLORS } }) => ({
  color: COLORS.TITLE,
}))``;
