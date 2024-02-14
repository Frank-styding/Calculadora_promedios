import styled, { useTheme } from "styled-components";
import { Text } from "@@components/Text";
import { forwardRef } from "react";
import { StyledInput } from "./StyledInput";

const StyledGrade = styled.div`
  display: flex;
  width: 60px;
  height: 30px;
  align-items: center;
  gap: 10px;
`;

export const Grade = forwardRef<HTMLInputElement, { idx: number }>(
  ({ idx }, ref) => {
    const { fonstSize } = useTheme();
    return (
      <StyledGrade>
        <Text $fontSize={fonstSize._3} $color="white" style={{ width: "20px" }}>
          {idx}
        </Text>
        <StyledInput type="number" min={0} max={20} placeholder="0" ref={ref} />
      </StyledGrade>
    );
  }
);
