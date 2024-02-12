import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  width: 100vw;
  padding: ${(props) => props.theme.nav.padding};
  box-shadow: ${(props) => props.theme.shadows.shadow_0};
  justify-content: space-around;
  align-items: center;
  border-radius: ${(props) => props.theme.br._0} ${(props) => props.theme.br._0}
    0 0;
  background-color: ${(props) => props.theme.colors.secundary};
`;
