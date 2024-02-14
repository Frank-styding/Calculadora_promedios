import styled, { useTheme } from "styled-components";
import { Text } from "@@components/Text";
import { ICourse } from "@@app/Types/ICourse";

const StyledHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 10px;
  gap: 50px;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius._4};
  margin: 10px;
  background-color: ${(props) => props.theme.colors.secundary};
`;

function Head({ course }: { course: ICourse }) {
  const theme = useTheme();
  return (
    <StyledHead>
      <Text $fontSize={theme.fonstSize._5} $color={theme.colors.textColor}>
        {course.name}
      </Text>
      <Text $fontSize={theme.fonstSize._6} $color={course.color}>
        {course.final_grade}
      </Text>
    </StyledHead>
  );
}
export default Head;
