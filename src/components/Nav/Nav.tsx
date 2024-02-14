import { ConfigIcon } from "@@components/icons/ConfigIcon";
import { CoursesIcon } from "@@components/icons/CoursesIcon";
import { EstadisticsIcon } from "@@components/icons/EstadisticsIcon";
import { useLocation, Link } from "react-router-dom";
import { Direction } from "./Direction";
import styled from "styled-components";

const StyledNav = styled.div`
  display: flex;
  width: 100vw;
  padding: ${(props) => props.theme.nav.padding};
  box-shadow: ${(props) => props.theme.shadows.shadow_0};
  justify-content: space-around;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius._5}
    ${(props) => props.theme.borderRadius._5} 0 0;
  background-color: ${(props) => props.theme.colors.secundary};
`;

function Nav() {
  const size = 24;
  const location = useLocation();

  const isSelectedPath = (paths: string[]) => {
    let selected = false;

    for (const path of paths) {
      selected = selected || location.pathname.startsWith(path);
    }

    return selected;
  };

  return (
    <StyledNav>
      <Direction
        $active={
          isSelectedPath(["/courses", "/courseEditor"]) ||
          location.pathname == "/"
        }
      >
        <Link to="courses">
          <CoursesIcon size={size} />
        </Link>
      </Direction>
      <Direction $active={isSelectedPath(["/estadistics"])}>
        <Link to="estadistics">
          <EstadisticsIcon size={size} />
        </Link>
      </Direction>
      <Direction $active={isSelectedPath(["/config"])}>
        <Link to="config">
          <ConfigIcon size={size} />
        </Link>
      </Direction>
    </StyledNav>
  );
}

export default Nav;
