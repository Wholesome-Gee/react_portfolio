import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IMode, modeSelector } from "../atoms";

const Container = styled(motion.div)<IMode>`
  width: 100vw;
  min-width: 375px;
  height: ${(props) => (props.mode === "desktop" ? "80px" : props.mode === "tablet" ? "70px" : "60px")};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 5;
  font-size: ${(props) => (props.mode === "desktop" ? "26px" : props.mode === "tablet" ? "22px" : "18px")};
  font-weight: 600;
`;
const Inner = styled.div<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "1200px" : "90%")};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Column = styled.div<IMode>`
  width: 20%;
  color: ${(props) => props.theme.whiteColor};
  ul {
    display: flex;
    justify-content: center;
    gap: ${(props) => (props.mode === "desktop" ? "100px" : props.mode === "tablet" ? "60px" : "20px")};
  }
  &:nth-child(2) {
    width: 40%;
  }
`;

const Logo = styled(motion.svg)<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "60px" : props.mode === "tablet" ? "50px" : "40px")};
`;

const logoVariant = {
  start: {
    fillOpacity: 1,
    rotateZ: 0,
    fill: "rgb(97, 258, 251)",
  },
  hover: {
    fillOpacity: [1, 0.8, 0.5, 0.8, 1],
    rotateZ: [0, -3, -5, -3, 0],
    fill: ["rgb(97, 258, 251)", "rgb(270, 270, 270)", "rgb(97, 258, 251)"],
    transition: {
      repeat: Infinity,
      duration: 1,
    },
  },
};
const liVariant = {
  start: {
    color: "rgb(255, 255, 255)",
  },
  hover: {
    color: "rgb(160, 160, 160)",
  },
};

function Header() {
  /* 💡 state */
  const innerHeight = window.innerHeight;
  const [mode, setMode] = useRecoilState(modeSelector);
  const { scrollY } = useScroll(); // motionValue를 반환
  const transScrollY = useTransform(scrollY, [0, 100], ["rgba(22,24,29,0)", "rgba(22,24,29,1)"]);
  // scrollY값이 0일땐 rgba(22,24,29,0), scrollY값이 100일땐 rgba(22,24,29,1)을 반환

  /* 💡 callback */
  function scrollIntroduce() {
    window.scroll({
      top: innerHeight,
      behavior: "smooth",
    });
  }
  function scrollProjects() {
    window.scroll({
      top: innerHeight + 1100,
      behavior: "smooth",
    });
  }

  return (
    <Container mode={mode} style={{ backgroundColor: transScrollY }}>
      <Inner mode={mode}>
        <Column mode={mode}>
          <Link to="/">
            <Logo
              mode={mode}
              variants={logoVariant}
              initial="start"
              whileHover="hover"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <motion.path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm368 96L96 192l0 128 352 0 0-128z" />
            </Logo>
          </Link>
        </Column>
        <Column mode={mode}>
          <ul>
            <motion.li
              variants={liVariant}
              initial="start"
              whileHover="hover"
              style={{ cursor: "pointer" }}
              onClick={scrollIntroduce}
            >
              Introduce
            </motion.li>
            <motion.li
              variants={liVariant}
              initial="start"
              whileHover="hover"
              style={{ cursor: "pointer" }}
              onClick={scrollProjects}
            >
              Projects
            </motion.li>
            {/* <motion.li variants={liVariant} initial="start" whileHover="hover" style={{ cursor: "pointer" }}>
              More
            </motion.li> */}
          </ul>
        </Column>
        <Column mode={mode}></Column>
      </Inner>
    </Container>
  );
}

export default Header;
