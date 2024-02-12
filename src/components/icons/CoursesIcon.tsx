import styled from "styled-components";

const Rect = styled.rect`
  fill: var(--color);
`;

export const CoursesIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size - 2}
      height={size - 2}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width="33.2406" height="9.62101" rx="3.01683" />
      <Rect y="12.1896" width="33.2406" height="9.62101" rx="3.01683" />
      <Rect y="24.379" width="33.2406" height="9.62101" rx="3.01683" />
    </svg>
  );
};
