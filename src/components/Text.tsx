import styled from "styled-components";

export const Text = styled.div<{ $color: string; $fontSize: number }>`
  font-family: ${(props) => props.theme.fonts.Monserrat}, sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: ${(props) => props.$fontSize}px;
  color: ${(props) => props.$color};
`;
