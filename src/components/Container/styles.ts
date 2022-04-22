import styled from "styled-components/native";
import theme from "../../theme";

export type ContentScrollProps = {
  backgroundColor?: keyof typeof theme.COLORS;
};

export const ContentContainer = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const ContentScroll = styled.ScrollView.attrs<ContentScrollProps>({
  showsVerticalScrollIndicator: false,
})<ContentScrollProps>`
  background-color: ${({ theme: { COLORS }, backgroundColor }) =>
    backgroundColor ? COLORS[backgroundColor] : COLORS.BACKGROUND};
`;
