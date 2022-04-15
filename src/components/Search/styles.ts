import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  padding: 0 24px;
`;

export const InputArea = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 16px;
  ${({ theme: { COLORS } }) => css`
    background-color: ${COLORS.TITLE};
    border: 1px solid ${COLORS.SHAPE};
  `};
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 52px;
  padding-left: 12px;
  font-family: ${({ theme: { FONTS } }) => FONTS.TEXT};
`;

export const ButtonClear = styled.TouchableOpacity`
  margin-right: 7px;
`;

export const Button = styled(RectButton)`
  width: 52px;
  height: 52px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { COLORS } }) => COLORS.SUCCESS_900};
  border-radius: 18px;
  margin-left: 7px;
`;

export const IconSearch = styled(Feather).attrs(({ theme: { COLORS } }) => ({
  name: "search",
  size: 16,
  color: COLORS.SHAPE,
}))``;

export const IconX = styled(Feather).attrs(({ theme: { COLORS } }) => ({
  name: "x",
  size: 16,
  color: COLORS.SHAPE,
}))``;
