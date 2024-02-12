import styled from "styled-components";

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "title grade" "grade_indicator grade_indicator";

  padding: 10px;
`;
