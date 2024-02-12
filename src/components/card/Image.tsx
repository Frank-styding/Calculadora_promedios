import styled from "styled-components";

export const Image = styled.div`
  aspect-ratio: 1;
  height: 100%;
  background-color: red; //! change color to color theme
  border-radius: ${(props) => props.theme.br._4};
`;
