import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";

const Container = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  width: 90%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  p {
    font-size: 1.5rem;
  }
`;
const Slider = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  overflow: hidden;
  position: relative;
`;
const Mention = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60;
`;

// 부모컴포넌트(MHome.tsx)에서 MMainSection컴포넌트를 useRef로 지정하기위해서 forwardRef를 적용한 후, Container에 ref={ref}를 적용
const MMainSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [index, setIndex] = useState(0);
  let mentions = ["근면성실한 Front-End 개발자", "소통이 원활한 Front-End 개발자", "열정적인 Front-End 개발자"];

  useEffect(() => {
    const increaseIndexInterval = setInterval(() => {
      setIndex((index) => (index === 2 ? 0 : index + 1));
    }, 3000);
    return () => clearInterval(increaseIndexInterval);
  }, []);
  return (
    <Container ref={ref}>
      <Slider>
        <AnimatePresence initial={false}>
          <Mention
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
      <p style={{ textAlign: "center" }}>Wholesome-Gee 입니다!</p>
    </Container>
  );
});

export default MMainSection;
