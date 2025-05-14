import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Container = styled.div`
  width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextBox = styled.div`
  width: 60%;
  font-size: 50px;
  
`
const Slider = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 60px;
  overflow: hidden;
  position: relative;
`
const Mention = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -60;
`

function MainSection() {
  const [index, setIndex] = useState(0)
  let mentions = ["근면성실한 Front-End 개발자", "소통이 원활한 Front-End 개발자", "열정적인 Front-End 개발자"]


  useEffect(()=>{
    const increaseIndexInterval = setInterval(()=>{
      setIndex(index=>index===2 ? 0 : index+1 )
    },3000)
    return ()=>clearInterval(increaseIndexInterval)
  },[])
  return (
    <Container>
      <TextBox>
        <Slider>
          <AnimatePresence initial={false}>
            <Mention 
              initial={{top:-60}}
              animate={{top:0}}
              exit={{top:60}}
              transition={{type:'tween', duration:1}}
              key={index}
            >
              <p>{mentions[index]}</p>
            </Mention>
          </AnimatePresence>
        </Slider>
        <p style={{textAlign:"center"}}>Wholesome-Gee 입니다!</p>
      </TextBox>
    </Container>
  )
}

export default MainSection
