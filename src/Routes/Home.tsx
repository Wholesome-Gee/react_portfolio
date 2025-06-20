import Header from "../Components/Header";
import styled from "styled-components";
import MainSection from "../Components/MainSection";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GrLinkTop } from "react-icons/gr";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Introduce from "../Components/Introduce";
import Projects from "../Components/Projects";
import { useMatch } from "react-router-dom";
import Project from "./Project";

const Background = styled.div<{ img: string }>`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(40, 44, 52, 0), rgba(40, 44, 52, 0.5), rgba(40, 44, 52, 1)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index: -5;
`;
const ScrollBtn = styled(motion.div)<{ height: number }>`
  width: 120px;
  margin: 0 auto;
  padding: 8px 0;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  p {
    margin-bottom: 4px;
  }
`;
const ToTop = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  bottom: 40px;
  color: ${(props) => props.theme.bgColor};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: ${(props) => props.theme.textColor};
  &:hover {
    transform: scale(1.1);
  }
`;

function Home() {
  /* 💡state */
  const [height, setHeight] = useState(window.innerHeight);
  const match = useMatch("/project/:id");
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll(); // scrollY는 motionValue

  /* 💡callback */
  function clickScrollBtn() {
    window.scroll({
      top: height,
      behavior: "smooth",
    });
  }
  function clickTopBtn() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  /* 💡hook etc.. */
  useMotionValueEvent(scrollY, "change", (Y) => {
    Y < 300 ? setShowScrollBtn(true) : setShowScrollBtn(false);
    Y >= 300 ? setShowTopBtn(true) : setShowTopBtn(false);
  });

  /* 💡return */
  return (
    <>
      <Header />
      <Background img={`${process.env.PUBLIC_URL}/images/bgImg.jpg`}></Background>
      <MainSection />
      <Introduce />
      <Projects />
      {match ? <Project /> : null}
      {showScrollBtn ? (
        <ScrollBtn
          initial={{ top: height - 100, opacity: 1 }}
          animate={{
            top: [height - 100, height - 80, height - 100],
            transition: { type: "linear", duration: 2, repeat: Infinity },
          }}
          whileHover={{ opacity: 0.5, transition: { duration: 0.2 } }}
          height={height}
          onClick={clickScrollBtn}
        >
          <p>click to scroll</p>
          <FaAngleDoubleDown fontSize={"32px"}></FaAngleDoubleDown>
        </ScrollBtn>
      ) : null}
      {showTopBtn ? (
        <ToTop onClick={clickTopBtn}>
          <GrLinkTop />
        </ToTop>
      ) : null}
    </>
  );
}

export default Home;
