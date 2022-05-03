import styled, { css } from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import { ProductProps } from "../../components/ProductCard";
import Button from "../../components/Button";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme: { COLORS } }) => COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme: { COLORS } }) => ({
  colors: COLORS.GRADIENT,
}))`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${getStatusBarHeight() + 33}px 24px 58px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GreetingEmoji = styled.Image`
  height: 32px;
  width: 32px;
  margin-right: 12px;
`;

export const GreetingText = styled.Text`
  font-size: 20px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TITLE};
    color: ${COLORS.TITLE};
  `};
`;

export const LogOutIcon = styled(MaterialIcons).attrs(
  ({ theme: { COLORS } }) => ({
    name: "logout",
    size: 24,
    color: COLORS.TITLE,
  })
)``;

export const StoveIcon = styled(MaterialCommunityIcons).attrs(
  ({ theme: { COLORS } }) => ({
    name: "stove",
    size: 24,
    color: COLORS.TITLE,
  })
)`
  margin-right: 12px;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 25px 24px 0;
  padding-bottom: 22px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme: { COLORS } }) => COLORS.SHAPE};
`;

export const MenuItensNumber = styled.Text`
  font-size: 14px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TEXT};
    color: ${COLORS.SECONDARY_900};
  `};
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 20px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TITLE};
    color: ${COLORS.SECONDARY_900};
  `};
`;

export const PizzasList = styled(
  FlatList as new (props: FlatListProps<ProductProps>) => FlatList<ProductProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: 125,
    marginHorizontal: 24,
  },
})``;

export const NewProductButton = styled(Button)`
  margin: 0 24px;
  margin-bottom: ${getBottomSpace() + 12}px;
`;
