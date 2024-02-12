import styled from "styled-components";
import Nav from "./Nav";
import Body from "./Body";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 4.5em auto 5.5em;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;
function Home() {
  return (
    <StyledApp>
      <div></div>
      <Body />
      <Nav />
    </StyledApp>
  );
}
export default Home;
