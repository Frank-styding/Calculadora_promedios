import styled from "styled-components";
import Nav from "../../components/Nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Courses from "../Courses/Courses";
import { useEffect } from "react";
import CourseEditor from "../CourseEditor/CourseEditor";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: auto 85px;
  width: 100vw;
  height: calc(100vh - 0px);
  background-color: ${(props) => props.theme.colors.primary};
`;

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/courses");
    }
  }, [location, navigate]);

  return (
    <StyledApp>
      <StyledBody>
        <Routes>
          <Route path="/"></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route
            path="/courseEditor/:courseId"
            element={<CourseEditor />}
          ></Route>
        </Routes>
      </StyledBody>
      <Nav />
    </StyledApp>
  );
}
export default Home;
