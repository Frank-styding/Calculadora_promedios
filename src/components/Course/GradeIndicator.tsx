import styled from "styled-components";

export const GradeIndicator = styled.div<{ $grade: number; $color: string }>`
  width: 100%;
  height: 13px;
  background-color: #2f434a;
  border-radius: ${(props) => props.theme.borderRadius._5};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${({ $color }) => $color};
    position: absolute;
    right: calc(100% * (1 - ${(props) => props.$grade / 20}));
    border-radius: ${(props) => props.theme.borderRadius._5};
  }
`;
