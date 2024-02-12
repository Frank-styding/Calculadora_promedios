import { ConfigIcon } from "@@components/icons/ConfigIcon";
import { CoursesIcon } from "@@components/icons/CoursesIcon";
import { EstadisticsIcon } from "@@components/icons/EstadisticsIcon";
import { useLocation, Link } from "react-router-dom";
import { Direction } from "./Direction";
import { StyledNav } from "./StyledNav";

function Nav() {
  const size = 24;
  const location = useLocation();

  return (
    <StyledNav>
      <Direction
        $active={
          location.pathname.startsWith("/courses") || location.pathname == "/"
        }
      >
        <Link to="courses">
          <CoursesIcon size={size} />
        </Link>
      </Direction>
      <Direction $active={location.pathname.startsWith("/estadistics")}>
        <Link to="estadistics">
          <EstadisticsIcon size={size} />
        </Link>
      </Direction>
      <Direction $active={location.pathname.startsWith("/config")}>
        <Link to="config">
          <ConfigIcon size={size} />
        </Link>
      </Direction>
    </StyledNav>
  );
}

export default Nav;
