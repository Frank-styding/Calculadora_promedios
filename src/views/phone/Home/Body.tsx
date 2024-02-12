import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Courses from "../Courses/Courses";

export const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
`;

function Body() {
  return (
    <StyledBody>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/" element={<Courses />} />
      </Routes>
    </StyledBody>
  );
}
export default Body;
