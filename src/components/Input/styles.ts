import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

export type InputProps = "primary" | "secondary";

type Props = {
  type: InputProps;
};

export const Container = styled(TextInput).attrs<Props>(
  ({ theme: { COLORS }, type }) => ({
    placeholderTextColor:
      type === "primary" ? COLORS.SECONDARY_900 : COLORS.PRIMARY_50,
  })
)<Props>`
  width: 100%;
  height: 56px;
  background-color: transparent;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0px;
  padding-left: 20px;
  margin-bottom: 16px;
  ${({ theme: { COLORS, FONTS }, type }) => css`
    font-family: ${FONTS.TEXT};
    border: 1px solid ${COLORS.SHAPE};
    color: ${type === "primary" ? COLORS.SECONDARY_900 : COLORS.TITLE};
  `}
`;
