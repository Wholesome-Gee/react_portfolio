import styled from "styled-components"
import {motion, useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import { Link } from "react-router-dom"

const Container = styled(motion.div)`
  width: 100vw;
  position: fixed;
  top: 0;
  font-size: 26px;
  z-index:1000;
`
const Inner = styled.div`
  width: 1200px;  
  margin: 0 auto;
  padding: 4px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Column = styled.div`
  width: 20%;
  color: ${props=> props.theme.whiteColor};
  font-weight: 600;
  ul {
    display: flex;
    justify-content: center;
    gap: 100px;
  }
  &:nth-child(2){
    width: 60%;
  }
`

const Logo = styled(motion.svg)`
  width: 60px;
`

const logoVariant = {
  start: {
    fillOpacity: 1,
    rotateZ: 0,
    fill: "rgb(97, 258, 251)"
  },
  hover: {
    fillOpacity: [1,0.8,0.5,0.8,1],
    rotateZ:[0,-3,-5,-3,0],
    fill:["rgb(97, 258, 251)","rgb(270, 270, 270)","rgb(97, 258, 251)"],
    transition: {
      repeat: Infinity,
      duration: 1
    }
  },
}
const liVariant = {
  start: {
    color:"rgb(255, 255, 255)"
  },
  hover: {
    color:"rgb(160, 160, 160)"
  }
}


function Header() {
  const {scrollY} = useScroll();
  const transScrollY = useTransform(scrollY,[0,100],["rgba(22,24,29,0)","rgba(22,24,29,1)"])
  
  function scrollIntroduce() {
    window.scroll({
      top: 632,
      behavior:"smooth"
    })
  }
  function scrollProjects() {
    window.scroll({
      top: 1267,
      behavior:"smooth"
    })
  }
  return (
    <Container 
      style={{backgroundColor:transScrollY}}
    >
        <Inner>
        <Column>
          <Link to="/">
            <Logo 
              variants={logoVariant}
              initial="start"
              whileHover="hover"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 576 512"
            >
              <motion.path 
                d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm368 96L96 192l0 128 352 0 0-128z"
              />
            </Logo>
          </Link>
        </Column>
        <Column>
          <ul>
            <motion.li variants={liVariant} initial="start" whileHover="hover" style={{cursor:"pointer"}} onClick={scrollIntroduce}>Introduce</motion.li>
            <motion.li variants={liVariant} initial="start" whileHover="hover" style={{cursor:"pointer"}} onClick={scrollProjects}>Projects</motion.li>
            <motion.li variants={liVariant} initial="start" whileHover="hover" style={{cursor:"pointer"}}>More</motion.li>
          </ul>
        </Column>
        <Column></Column>
      </Inner>
    </Container>
  )
}

export default Header
