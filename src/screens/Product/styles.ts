import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme: { COLORS } }) => ({
  colors: COLORS.GRADIENT,
}))`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 33}px 20px 24px;
`;

export const Title = styled.Text`
  font-size: 24px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TITLE};
    color: ${COLORS.TITLE};
  `}
`;

export const DeleteLabel = styled.Text`
  font-size: 14px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TEXT};
    color: ${COLORS.TITLE};
  `}
`;
