import styled, { css } from "styled-components/native";

export const Image = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 80px;
`;

export const Placeholder = styled.View`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${({ theme: { COLORS } }) => COLORS.SECONDARY_900};
`;

export const PlaceholderText = styled.Text`
  font-size: 14px;
  text-align: center;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TEXT};
    color: ${COLORS.SECONDARY_900};
  `};
`;
