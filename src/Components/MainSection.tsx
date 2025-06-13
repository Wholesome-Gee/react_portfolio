import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { IMode, modeSelector } from "../atoms";

/* styled-components */
const Container = styled.div<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "1200px" : "95%")};
  min-width: 375px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TextBox = styled.div<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "700px" : props.mode === "tablet" ? "600px" : "350px")};
  font-size: ${(props) => (props.mode === "desktop" ? "50px" : props.mode === "tablet" ? "40px" : "25px")};
  p {
    text-align: center;
  }
`;
const Slider = styled.div<IMode>`
  width: 100%;
  margin: 0 auto 10px;
  height: ${(props) => (props.mode === "desktop" ? "50px" : props.mode === "tablet" ? "40px" : "25px")};
  overflow: hidden;
  position: relative;
`;
const Mention = styled(motion.p)<IMode>`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
`;

function MainSection() {
  /* 💡state */
  const [mode, setMode] = useRecoilState(modeSelector);
  const [index, setIndex] = useState(0);
  const mentions = ["근면성실한 Front-End 개발자", "소통이 원활한 Front-End 개발자", "열정적인 Front-End 개발자"];

  /* 💡hook etc... */
  useEffect(() => {
    const increaseIndexInterval = setInterval(() => {
      setIndex((index) => (index === 2 ? 0 : index + 1));
    }, 3000);
    return () => clearInterval(increaseIndexInterval);
  }, []);

  /* 💡JSX */
  return (
    <Container mode={mode}>
      <TextBox mode={mode}>
        <Slider mode={mode}>
          <AnimatePresence initial={false}>
            <Mention
              mode={mode}
              initial={{ top: -60 }}
              animate={{ top: 0 }}
              exit={{ top: 60 }}
              transition={{ type: "tween", duration: 1 }}
              key={index}
            >
              <p>{mentions[index]}</p>
            </Mention>
          </AnimatePresence>
        </Slider>
        <p>Wholesome-Gee 입니다!</p>
      </TextBox>
    </Container>
  );
}

export default MainSection;
