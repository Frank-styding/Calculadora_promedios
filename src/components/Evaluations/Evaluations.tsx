import { useTheme } from "styled-components";
import { Text } from "@@components/Text";
import { ICourse } from "@@app/Types/ICourse";
import { useState } from "react";
import { TitleContainer } from "./TitleContainer";
import { GradesContainer } from "./GradesContainer";
import { Grade } from "./Grade";
import { animated, useSpring } from "@react-spring/web";

function Evaluations({ course }: { course: ICourse }) {
  const { fonstSize } = useTheme();
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useSpring(() => ({
    maxHeight: 60,
    config: { duration: 400 },
  }));
  const theme = useTheme();

  const mouseDown = () => {
    if (!open) {
      setMaxHeight({ maxHeight: 500 });
    } else {
      setMaxHeight({ maxHeight: 60 });
    }

    setOpen(!open);
  };

  return (
    <animated.div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: maxHeight.maxHeight,
        boxShadow: theme.shadows.shadow_1,
        backgroundColor: theme.colors.secundary,
        borderRadius: theme.borderRadius._2,
        overflow: open ? "none" : "hidden",
        width: "90vw",
      }}
    >
      <TitleContainer $color={course.color} onMouseDown={mouseDown}>
        <Text $fontSize={fonstSize._3} $color="white">
          PC
        </Text>
      </TitleContainer>
      <GradesContainer>
        <Grade idx={1} />
        <Grade idx={2} />
        <Grade idx={3} />
        <Grade idx={4} />
        <Grade idx={5} />
        <Grade idx={6} />
        <Grade idx={7} />
        <Grade idx={8} />
        <Grade idx={9} />
        <Grade idx={10} />
      </GradesContainer>
    </animated.div>
  );
}
export default Evaluations;
