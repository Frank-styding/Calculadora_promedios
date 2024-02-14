import styled from "styled-components";

export const Card = styled.div`
  width: 90vw;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: ${(props) => props.theme.borderRadius._2};
  box-shadow: ${(props) => props.theme.shadows.shadow_1};
`;
