import styled from "styled-components";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MMainSection from "../Components/MMainSection";
import { Outlet, useMatch } from "react-router-dom";
import MHeader from "../Components/MHeader";
import { FaAngleDoubleDown } from "react-icons/fa";
import { GrLinkTop } from "react-icons/gr";
import MIntroduce from "../Components/MIntroduce";
import MProjects from "../Components/MProjects";
import MProject from "./MProject";

const Container = styled.div`
  width: 100vw;
`;
const Background = styled.div<{ img: string }>`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(40, 44, 52, 0), rgba(40, 44, 52, 0.5), rgba(40, 44, 52, 1)),
    url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  position: fixed;
  z-index: -5;
`;
const ScrollBtn = styled(motion.div)`
  width: 120px;
  margin: 0 auto;
  padding: 8px 0;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: pointer;
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

function MHome() {
  const height = window.innerHeight;
  const mainSection = useRef<HTMLDivElement>(null);
  const introduceSection = useRef<HTMLDivElement>(null);
  const [mainSectionHeight, setMainSectionHeight] = useState(0);
  const [introduceSectionHeight, setIntroduceSectionHeight] = useState(0);
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const [showToTop, setShowToTop] = useState(false);
  const match = useMatch("/project/:id");

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (prev) => {
    prev > 100 ? setShowScrollBtn(false) : setShowScrollBtn(true);
    prev >= 300 ? setShowToTop(true) : setShowToTop(false);
  });
  // useMotionValueEvent(scrollY, "change", (prev) => console.log(prev));

  function handleClickScrollBtn() {
    window.scroll({
      top: mainSectionHeight - 80,
      behavior: "smooth",
    });
  }
  function handleClickToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (mainSection.current) {
      setMainSectionHeight(mainSection.current.offsetHeight);
    }
    if (introduceSection.current) {
      setIntroduceSectionHeight(introduceSection.current.offsetHeight);
    }
  }, []);
  console.log("@", mainSectionHeight);
  return (
    <Container>
      <MHeader mainSectionHeight={mainSectionHeight} introduceSectionHeight={introduceSectionHeight} />
      <Background img={`${process.env.PUBLIC_URL}/images/bgImg.jpg`}></Background>
      <MMainSection ref={mainSection} />
      <MIntroduce ref={introduceSection} />
      <MProjects />
      {match ? <MProject /> : null}
      {showScrollBtn ? (
        <ScrollBtn
          initial={{ top: height - 100, opacity: 1 }}
          animate={{
            top: [height - 100, height - 80, height - 100],
            transition: { type: "linear", duration: 2, repeat: Infinity },
          }}
          onClick={handleClickScrollBtn}
        >
          <p style={{ marginBottom: "4px" }}>tap to scroll</p>
          <FaAngleDoubleDown fontSize={"32px"}></FaAngleDoubleDown>
        </ScrollBtn>
      ) : null}
      {showToTop ? (
        <ToTop onClick={handleClickToTop}>
          <GrLinkTop />
        </ToTop>
      ) : null}
    </Container>
  );
}

export default MHome;
