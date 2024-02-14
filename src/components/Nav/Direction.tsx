import styled from "styled-components";

export const Direction = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  place-content: center;
  width: 30px;
  height: 30px;
  padding: 25px;
  position: relative;

  --color: ${(props) => props.theme.nav.iconColor};
  &:hover {
    --color: ${(props) => props.theme.nav.activeIconColor};
  }

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
    props.$active
      ? `--color: ${props.theme.nav.activeIconColor};`
      : `--color:${props.theme.nav.iconColor};`}

  ${(props) =>
    props.$active &&
    `background-color: ${props.theme.nav.activeBacground}; 
     border-radius: 50%;`}
`;
