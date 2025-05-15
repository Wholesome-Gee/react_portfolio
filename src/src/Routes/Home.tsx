import Header from '../Components/Header'
import styled from 'styled-components'
import MainSection from '../Components/MainSection'
import { FaAngleDoubleDown } from "react-icons/fa";
import { GrLinkTop } from "react-icons/gr";
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import Introduce from '../Components/Introduce';
import Projects from '../Components/Projects';

const Background = styled.div<{bgImg:string}>`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(40,44,52,0),rgba(40,44,52,0.5),rgba(40,44,52,1)),url(${(props)=>props.bgImg}) ;
  background-size: cover;
  background-position: center;
  position: fixed;
  z-index:-5;
`
const ScrollBtn = styled(motion.div)<{innerHeight:number}>`
  width: 120px;
  margin: 0 auto;
  padding: 8px 0;
  text-align: center;
  position: absolute;
  top: ${(props)=>props.innerHeight-100}px;
  left: 0;
  right: 0;
  cursor: pointer;
`
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
  color: ${props=>props.theme.bgColor};
  cursor: pointer;
  transition: 0.2s ease-in-out;
  background-color: ${props=>props.theme.textColor};
  &:hover {
    transform: scale(1.1)
  }
`

function Home() {
  let innerHeight = window.innerHeight;
  const [showScrollBtn, setShowScrollBtn] = useState(true)
  const [showToTop, setShowToTop] = useState(false)
  const {scrollY} = useScroll();
  useMotionValueEvent(scrollY,'change',(prev)=>{
    console.log(prev);
    
    prev > 60 ? setShowScrollBtn(false) : setShowScrollBtn(true); 
    prev >= 300 ? setShowToTop(true) : setShowToTop(false);
  })
  // useMotionValueEvent(scrollY,'change',(prev)=>console.log(prev))

  
  /* scrollY > 120 ?
  스크롤Y가 120이 넘으면 
  scrollbtn display:none
  사라지는데 애니메이션
  632로 이동
  */

  function handleClickScrollBtn() {
    window.scroll({
      top: 800,
      behavior:"smooth"
    })
  }
  function handleClickToTop() {
    window.scroll({
      top: 0,
      behavior:"smooth"
    })
  }
  return (
    <div >
      <Header></Header>
      <Background bgImg={`${process.env.PUBLIC_URL}/images/bgImg.jpg`}></Background>
      <MainSection/>
      <Introduce/>
      <Projects/>
      {
        showScrollBtn ?
        <ScrollBtn
          initial={{top:innerHeight-100,opacity:1}}
          animate={{top:[innerHeight-100,innerHeight-80,innerHeight-100],transition:{type:"linear",duration:2, repeat: Infinity}}}
          whileHover={{opacity:0.5, transition:{duration:0.2}}}
          innerHeight={innerHeight}
          onClick={handleClickScrollBtn}
        >
          <p style={{marginBottom:"4px"}}>click to scroll</p>
          <FaAngleDoubleDown fontSize={'32px'}></FaAngleDoubleDown>
        </ScrollBtn> : 
        null
      }
      {
        showToTop ? 
        <ToTop onClick={handleClickToTop}>
          <GrLinkTop/>
        </ToTop> :
        null
      }
          
    </div>
  )
}

export default Home
