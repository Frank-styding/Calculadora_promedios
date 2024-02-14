import styled from "styled-components";

export const TitleContainer = styled.div<{ $color: string }>`
  display: flex;
  width: 100%;
  height: 60px;
  min-height: 60px;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.$color};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius._2};
`;
