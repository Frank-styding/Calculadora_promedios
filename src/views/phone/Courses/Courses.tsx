import styled from "styled-components";
import { Card } from "../../../components/card/Card";

const StyledCourses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
`;

function Courses() {
  return (
    <StyledCourses>
      <Card name="caldif" grade={10} />
      <Card name="fa" grade={10} />
    </StyledCourses>
  );
}

export default Courses;
