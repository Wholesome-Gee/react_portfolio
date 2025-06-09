import styled from "styled-components";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Container = styled(motion.div)`
  padding: 0 2%;
  width: 100vw;
  height: 80px;
  position: fixed;
  top: 0;
  font-size: 1rem;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 600;
  z-index: 10;
  div {
    width: 33%;
  }
  background-color: ${(props) => props.theme.blackColor.dark};
`;
const Logo = styled.div`
  text-align: center;
`;
const Menu = styled.div`
  text-align: right;
`;

const NavBox = styled(motion.div)`
  margin-top: 80px;
  width: 100vw;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: fixed;
  z-index: 5;
  background-color: ${(props) => props.theme.blackColor.dark};
  div {
    width: 50%;
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
  }
`;

const navBoxVariant = {
  start: { y: -130 },
  end: { y: 0 },
  exit: { y: -130 },
};

interface IProps {
  mainSectionHeight: number;
  introduceSectionHeight: number;
}
function MHeader({ mainSectionHeight, introduceSectionHeight }: IProps) {
  const [showNavBox, setShowNavBox] = useState(false);
  function handleClickIntroduce() {
    window.scroll({
      top: mainSectionHeight - 80,
      behavior: "smooth",
    });
  }
  function handleClickProjects() {
    window.scroll({
      top: mainSectionHeight + introduceSectionHeight - 80,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Container>
        <div />
        <Logo>WholesomeGee</Logo>
        <Menu>
          <RxHamburgerMenu
            onClick={() => {
              setShowNavBox((prev) => !prev);
            }}
          />
        </Menu>
      </Container>
      <AnimatePresence>
        {" "}
        {showNavBox ? (
          <NavBox
            variants={navBoxVariant}
            initial="start"
            animate="end"
            exit="exit"
            transition={{ type: "tween", duration: 0.5 }}
          >
            <div onClick={handleClickIntroduce}>Introduce</div>
            <div onClick={handleClickProjects}>Projects</div>
          </NavBox>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default MHeader;
