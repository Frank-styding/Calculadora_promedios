import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useAppSelector } from "@@hooks/useDispach";
import Head from "./Head";
import Evaluations from "@@components/Evaluations/Evaluations";

const CourseEditorStyled = styled.div`
  display: grid;
  grid-template-rows: 80px auto;
  width: 100%;
  height: calc(100vh - 85px);
`;

const ScrollContainer = styled.div`
  padding-top: 15px;
  place-content: center;
  overflow-y: scroll;
  gap: 20px;
`;

const CoursesContainer = styled.div`
  display: grid;
  place-content: center;
  gap: 20px;
  padding: 20px 0px;
`;

function CourseEditor() {
  const params = useParams() as { courseId: string };
  const course = useAppSelector(
    (state) =>
      state.Global.courses.filter((course) => course.id == params.courseId)[0]
  );

  return (
    <CourseEditorStyled>
      <Head course={course} />
      <ScrollContainer>
        <CoursesContainer>
          <Evaluations course={course} />
          <Evaluations course={course} />
          <Evaluations course={course} />
          <Evaluations course={course} />
        </CoursesContainer>
      </ScrollContainer>
    </CourseEditorStyled>
  );
}

export default CourseEditor;
