import styled from "styled-components";
import Course from "@@components/Course/Course";
import { Link } from "react-router-dom";
import { useAppSelector } from "@@hooks/useDispach";

const StyledCourses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100vw;
  padding-top: 20px;

  & > a {
    text-decoration: none;
  }
`;

function Courses() {
  const courses = useAppSelector((state) => state.Global.courses);
  return (
    <StyledCourses>
      {courses.map((course, idx) => (
        <Link to={`/courseEditor/${course.id}`} key={idx}>
          <Course data={course} />
        </Link>
      ))}
    </StyledCourses>
  );
}

export default Courses;
