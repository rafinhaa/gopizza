import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid ${({ theme: { COLORS } }) => COLORS.PRIMARY_100};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme: { COLORS } }) => ({
  name: "chevron-left",
  size: 18,
  color: COLORS.TITLE,
}))``;
