import { CenterContainer } from "@@components/GridCenterContainer";
import styled, { useTheme } from "styled-components";
import { DataContainer } from "./DataContainer";
import { GradeIndicator } from "./GradeIndicator";
import { ImageContainer } from "./ImageContainer";
import { Image } from "./Image";
import { Text } from "../Text";
import { ICourse } from "@@app/Types/ICourse";
import { Card } from "../Card";

const StyledCourse = styled(Card)`
  display: grid;
  grid-template-columns: calc(45vw * 0.618) auto;
`;

function Course({ data }: { data: ICourse }) {
  const {
    colors: { textColor },
    fonstSize,
  } = useTheme();
  return (
    <StyledCourse>
      <ImageContainer>
        <Image $color={data.color} />
      </ImageContainer>
      <DataContainer>
        <CenterContainer name="title" $align={["start", "center"]}>
          <Text $color={textColor} $fontSize={fonstSize._3}>
            {data.name}
          </Text>
        </CenterContainer>
        <CenterContainer name="grade" $align={["center", "center"]}>
          <Text $color={data.color} $fontSize={fonstSize._3}>
            {data.final_grade}
          </Text>
        </CenterContainer>
        <CenterContainer name="grade_indicator" $align={["center", "center"]}>
          <GradeIndicator $grade={data.final_grade} $color={data.color} />
        </CenterContainer>
      </DataContainer>
    </StyledCourse>
  );
}
export default Course;
