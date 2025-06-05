import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ContentsBox = styled.div`
  width: 1150px;
  height: 700px;
  padding: 40px 20px;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
`;
const Description = styled.div`
  font-size: 18px;
`;
const Contents = styled.div`
  padding: 40px 0;
  height: 550px;
  display: flex;
  justify-content: space-between;
`;
const ContentLeft = styled.div`
  width: 710px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Slider = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
`;
const SlideImg = styled(motion.div)<{ bgImg: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center center;
`;
const Buttons = styled.div`
  padding: 14px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    color: ${(props) => props.theme.textColor};
    outline: none;
    background-color: rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: rgba(270, 270, 270, 0.2);
    }
  }
  p {
    margin: 0 16px;
  }
`;
const PrevBtn = styled.button``;
const NextBtn = styled.button``;
const ContentRight = styled.div`
  padding-left: 20px;
  width: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Skills = styled.div`
  margin-bottom: 40px;
  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Icon = styled.div<{ bgImg: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
`;
const Detail = styled.div``;
const DetailTitle = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;
const DetailText = styled.div`
  margin-bottom: 10px;
  padding: 8px 16px;
  height: 270px;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;

  p {
    font-size: 18px;
  }
`;
const Text = styled.div`
  display: flex;
`;
const TextMark = styled.span`
  width: 30px;
  margin-right: 4px;
`;
const TextContent = styled.span``;
const Links = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;

  a {
    padding: 10px 0;
    width: 120px;
    display: block;
    font-size: 14px;
    text-align: center;
    border-radius: 20px;
    background-color: ${(props) => props.theme.blackColor.dark};
    &:hover {
      color: ${(props) => props.theme.pointColor};
    }
  }
`;
const GithubLink = styled.a``;
const SiteLink = styled.a``;

const CloseBtn = styled.div`
  width: 50px;
  height: 50px;
  text-align: center;
  position: absolute;
  top: -45px;
  right: -10px;
  font-size: 36px;
  z-index: 10;
`;

const slideBoxVariant = {
  start: (isReverse: boolean) => ({
    x: isReverse ? -710 : 710,
  }),
  end: {
    x: 0,
  },
  exit: (isReverse: boolean) => ({
    x: isReverse ? 710 : -710,
  }),
};

function Project() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);
  const [isReverse, setIsReverse] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  // 모달창이 띄워져있을때, 모달창 뒤의 배경화면이 스크롤되는것을 방지하는 코드
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

  let arr = [1, 2, 3, 4, 5, 6];

  function moveBack() {
    navigate(-1);
  }
  function increaseIndex() {
    if (isSliding) {
      return;
    } else {
      setIsSliding(true);
      setIsReverse(false);
      setIndex((index) => (index === 6 ? 1 : index + 1));
    }
  }
  function decreaseIndex() {
    if (isSliding) return;
    setIsSliding(true);
    setIsReverse(true);
    setIndex((index) => (index === 1 ? 6 : index - 1));
  }

  return (
    <Overlay>
      <ContentsBox>
        <Header>
          <Title>유튜브 클론코딩</Title>
          <Description>(JS를 활용하여 Youtube 플랫폼을 만들어보기)</Description>
        </Header>

        <Contents>
          <ContentLeft>
            <Slider>
              <AnimatePresence
                initial={false}
                onExitComplete={() => {
                  setIsSliding(false);
                }}
                custom={isReverse}
              >
                {arr.map((item) =>
                  item === index ? (
                    <SlideImg
                      custom={isReverse}
                      variants={slideBoxVariant}
                      initial="start"
                      animate="end"
                      exit="exit"
                      transition={{ type: "tween", duration: 1 }}
                      bgImg={`${process.env.PUBLIC_URL}/images/${index}.png`}
                      key={index}
                    ></SlideImg>
                  ) : null
                )}
              </AnimatePresence>
            </Slider>
            <Buttons>
              <PrevBtn onClick={decreaseIndex}>&larr;</PrevBtn>
              <p>{index}/6</p>
              <NextBtn onClick={increaseIndex}>&rarr;</NextBtn>
            </Buttons>
          </ContentLeft>
          <ContentRight>
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
            <Detail>
              <DetailTitle>주요기능</DetailTitle>
              <DetailText>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
                <Text>
                  <TextMark>✅</TextMark>
                  <TextContent>
                    가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
                  </TextContent>
                </Text>
              </DetailText>
            </Detail>
          </ContentRight>
          <Links>
            <GithubLink>Github ↗</GithubLink>
            <SiteLink>Project ↗</SiteLink>
          </Links>
        </Contents>
        <CloseBtn onClick={moveBack}>×</CloseBtn>
      </ContentsBox>
    </Overlay>
  );
}

export default Project;
