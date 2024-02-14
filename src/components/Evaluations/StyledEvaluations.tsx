import styled from "styled-components";
import { Card } from "@@components/Card";

export const StyledEvaluations = styled(Card)<{
  $show: boolean;
}>`
  display: flex;

  flex-direction: column;
  overflow: hidden;

  max-height: ${(props) => (props.$show ? "60" : "500")}px;
  transition: max-height 0.4s ease;
`;
