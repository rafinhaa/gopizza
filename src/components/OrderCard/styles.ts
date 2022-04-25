import styled, { css } from "styled-components/native";

type ContainerProps = {
  index: number;
};

export type StatusTypesProps = "Preparando" | "Pronto" | "Entregue";

type StatusProps = {
  status: StatusTypesProps;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 50%;
  align-items: center;
  padding: 24px;
  ${({ theme: { COLORS }, index }) => css`
    border-left-width: ${index % 2 > 0 ? 0 : 1}px;
    border-left-color: ${COLORS.SHAPE};
  `}
`;

export const Image = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 52px;
`;

export const Name = styled.Text`
  font-size: 20px;
  margin-top: 21px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TITLE};
    color: ${COLORS.SECONDARY_900};
  `};
`;

export const Description = styled.Text`
  font-size: 14px;
  margin-top: 11px;
  ${({ theme: { COLORS, FONTS } }) => css`
    font-family: ${FONTS.TEXT};
    color: ${COLORS.SECONDARY_400};
  `};
`;

export const StatusContainer = styled.View<StatusProps>`
  padding: 4px 16px;
  border-radius: 12px;
  margin-top: 16px;
  align-items: center;
  justify-content: center;
  ${({ theme: { COLORS }, status }) =>
    status === "Preparando" &&
    css`
      background-color: ${COLORS.ALERT_50};
      border: 1px solid ${COLORS.ALERT_900};
    `};
  ${({ theme: { COLORS }, status }) =>
    status === "Pronto" &&
    css`
      background-color: ${COLORS.SUCCESS_900};
    `};
  ${({ theme: { COLORS }, status }) =>
    status === "Entregue" &&
    css`
      background-color: ${COLORS.SECONDARY_900};
    `};
`;

export const StatusLabel = styled.Text<StatusProps>`
  font-size: 12px;
  line-height: 20px;
  ${({ theme: { COLORS, FONTS }, status }) =>
    css`
      font-family: ${FONTS.TEXT};
      color: ${status === "Preparando" ? COLORS.ALERT_900 : COLORS.TITLE};
    `};
`;
