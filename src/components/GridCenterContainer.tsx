import styled from "styled-components";

export const CenterContainer = styled.div<{
  name: string;
  $align: [string, string];
}>`
  grid-area: ${(props) => props.name};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.$align[0]};
  align-items: ${(props) => props.$align[1]};
`;
