import styled from "styled-components";

export const Image = styled.div<{ $color: string }>`
  aspect-ratio: 1;
  height: 100%;
  background-color: ${({ $color }) => $color};
  border-radius: ${({ theme: { borderRadius: br } }) => br._2};
`;
