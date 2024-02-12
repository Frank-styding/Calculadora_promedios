import styled from "styled-components";

const Rect = styled.rect`
  fill: var(--color);
`;
export const EstadisticsIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect y="17.5862" width="8.05262" height="16.4138" rx="2.37327" />
      <Rect
        x="12.5264"
        y="8.98836"
        width="8.05262"
        height="25.0115"
        rx="2.37327"
      />
      <Rect x="25.9474" width="8.05262" height="34" rx="2.37327" />
    </svg>
  );
};
