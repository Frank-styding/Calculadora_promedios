import styled from "styled-components";

export const GradeIndicator = styled.div<{ $grade: number }>`
  width: 100%;
  height: 13px;
  background-color: #2f434a;
  border-radius: ${(props) => props.theme.br._4};
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: red;
    position: absolute;
    right: calc(100% * (1 - ${(props) => props.$grade / 20}));
  }
`;
