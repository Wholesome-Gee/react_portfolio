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
    width: 32%;
  }
  background-color: ${(props) => props.theme.bgColor};
`;
const Logo = styled.div``;
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
  background-color: ${(props) => props.theme.bgColor};
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
function MHeader() {
  const [showNavBox, setShowNavBox] = useState(false);
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
            <div>Introduce</div>
            <div>Projects</div>
          </NavBox>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default MHeader;
