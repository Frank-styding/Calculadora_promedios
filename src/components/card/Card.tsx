import { CenterContainer } from "@@components/GridCenterContainer";
import styled, { useTheme } from "styled-components";
import { DataContainer } from "./DataContainer";
import { GradeIndicator } from "./GradeIndicator";
import { ImageContainer } from "./ImageContainer";
import { Image } from "./Image";
import { Text } from "./Text";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: calc(45vw * 0.618) auto;
  width: 90vw;
  height: calc(45vw * 0.618);
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: ${(props) => props.theme.br._3};
  box-shadow: ${(props) => props.theme.shadows.shadow_1};
`;

export function Card({ name, grade }: { name: string; grade: number }) {
  const {
    colors: { textColor },
  } = useTheme();
  return (
    <StyledCard>
      <ImageContainer>
        <Image />
      </ImageContainer>
      <DataContainer>
        <CenterContainer name="title" $align={["start", "center"]}>
          <Text $color={textColor} $fontSize={20}>
            {name}
          </Text>
        </CenterContainer>
        <CenterContainer name="grade" $align={["center", "center"]}>
          <Text $color={"yellow"} $fontSize={16}>
            {grade}%
          </Text>
        </CenterContainer>
        <CenterContainer name="grade_indicator" $align={["center", "center"]}>
          <GradeIndicator $grade={grade} />
        </CenterContainer>
      </DataContainer>
    </StyledCard>
  );
}
