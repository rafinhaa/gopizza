import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View``;

export const Header = styled(LinearGradient).attrs(({ theme: { COLORS } }) => ({
  colors: COLORS.GRADIENT,
}))`
  flex-direction: row;
  justify-content: space-between;
  padding: ${getStatusBarHeight() + 33}px 24px 58px;
`;

export const HeaderLastView = styled.View`
  width: 40px;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TITLE};
    color: ${COLORS.TITLE};
  `};
`;
