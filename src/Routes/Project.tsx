import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0,0,0,0.8);
`
const ContentsBox = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${props=>props.theme.bgColor};
`
const Contents = styled.div`
  width: 95%;
  height: 95%;
`
const Top = styled.div`
  height: 60%;
  display: flex;
  justify-content: space-between;
`
const TopLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Slider = styled.div`
  width: 360px;
  height: 220px;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
`
const SlideImg = styled(motion.div)<{bgImg:string}>`
  width:100%;
  height: 100%;
  position: absolute;
  background-image: ${props=>`url(${props.bgImg})`};
  background-size: cover;
  background-position: center center;
`
const Buttons = styled.div`
  padding: 14px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 30px;
    height: 30px;
    border:none;
    border-radius: 50%;
    color: ${props=>props.theme.textColor};
    outline: none;
    background-color: rgba(0,0,0,0.5);
    &:hover {
      background-color: rgba(270,270,270,0.2);
    }
  }
  p {
    margin: 0 16px;
  }
`
const PrevBtn = styled.button``
const NextBtn = styled.button``
const TopRight = styled.div`
  padding-left: 24px;
  padding-bottom: 55px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 24px;
`
const Description = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`
const Skills = styled.div`
  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`
const Icon = styled.div<{bgImg:string}>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${props=>`url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
`
const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  a {
    padding: 10px 0;
    width: 120px;
    display: block;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    background-color: ${props=>props.theme.blackColor.dark};
    &:hover {
      color: ${props=>props.theme.pointColor};
    }
  }
`
const GithubLink = styled.a`
`
const SiteLink = styled.a`
  `
const Bottom = styled.div`
`
const BottomTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`
const BottomText = styled.div`
  margin-bottom: 10px;
  padding: 8px 16px;
  height: 110px;
  border: 1px solid white;
  border-radius: 8px;
  overflow-y: scroll;
`

const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  position: absolute;
  top: -45px;
  right: -10px;
  font-size: 36px;
  z-index: 10;
`

const slideBoxVariant = {
  start: (isReverse:boolean)=>({
    x: isReverse ? -360 : 360
  }),
  end:{
    x:0
  },
  exit:(isReverse:boolean)=>({
    x: isReverse ? 360 : -360
  }),
}

function Project() {
  const navigate = useNavigate()
  const [index,setIndex] = useState(1)
  const [isReverse,setIsReverse] = useState(false)
  const [isSliding,setIsSliding] = useState(false)
  
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  let arr = [1,2,3,4,5,6]

  function moveBack () {
    navigate(-1)
  }
  function increaseIndex(){
    if(isSliding) {
      return;
    } else {
      setIsSliding(true)
      setIsReverse(false)
      setIndex(index=>index===6? 1 : index+1)
    }
  }
  function decreaseIndex(){
    if(isSliding) return;
    setIsSliding(true)
    setIsReverse(true)
    setIndex(index=>index===1? 6 : index-1)
  }


  return (
    <Container>
      <ContentsBox>
        <Contents>
          <Top>
            <TopLeft>
              <Slider>
                <AnimatePresence initial={false} onExitComplete={()=>{setIsSliding(false)}} custom={isReverse}>
                  {arr.map((item)=>(
                    item===index ?
                      <SlideImg 
                        custom={isReverse}
                        variants={slideBoxVariant}
                        initial="start"
                        animate="end"
                        exit="exit"
                        transition={{type:"tween", duration:1}}
                        bgImg={`${process.env.PUBLIC_URL}/images/${index}.png`} 
                        key={index}
                      >
                      </SlideImg>:
                        null
                      ))}
                  </AnimatePresence> 
                </Slider> 
              <Buttons>
                <PrevBtn onClick={decreaseIndex}>&larr;</PrevBtn>
                <p>{index}/6</p>
                <NextBtn onClick={increaseIndex}>&rarr;</NextBtn>
              </Buttons>
            </TopLeft>
            <TopRight>
              <Title>유튜브 클론코딩</Title>
              <Description>JS를 활용하여 Youtube 플랫폼을 만들어보기</Description>
              <Skills>
                <p>Skills</p>
                <Icons>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                  <Icon bgImg={`${process.env.PUBLIC_URL}/images/js.png`}></Icon>
                </Icons>
              </Skills>
            </TopRight>
          </Top>
          <Bottom>
            <BottomTitle>주요기능</BottomTitle>
            <BottomText>
              <p>1.아 졸라 만들기 귀찮다. 어떡하지</p>
              <p>2.집에가서 맛있는거 먹으면서 웹툰보고싶당..</p>
              <p>3.배그도 한판 하고 싶다 너무 졸려 그리고ㅠㅠ</p>
              <p>4.한로로무대 또 보고싶다 이번에 펜타포트온다는데</p>
              <p>5.진짜 무조건 티켓팅한다 그러니까 이제 절약시작이다!</p>
              <p>6.흠캬캬캬캬캬캬ㅑㅋㅋ캬!</p>
            </BottomText>
            <Links>
                <GithubLink>Github ↗</GithubLink>
                <SiteLink>Project ↗</SiteLink>
              </Links>
          </Bottom>
        </Contents>
        <CloseBtn onClick={moveBack}>
        ×
        </CloseBtn>
      </ContentsBox>
      
    </Container>
  )
}

export default Project
