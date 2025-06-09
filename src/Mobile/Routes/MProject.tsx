import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IProject, projectsState } from "../../atoms";
import { useRecoilValue } from "recoil";

const Overlay = styled(motion.div)`
  padding: 80px 0 150px;
  z-index: 10;
  height: 120vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  overflow-y: scroll;

  /* z-slidenum: 10; */
  background-color: rgba(0, 0, 0, 0.8);
`;
const ContentsBox = styled.div`
  height: auto;
  max-width: 90%;
  padding: 10% 5%;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Skills = styled.div`
  margin-top: 8px;
`;
const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Icon = styled.div<{ bgImg: string }>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.textColor};
`;
const Description = styled.div`
  font-size: 14px;
`;
const Contents = styled.div`
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ContentLeft = styled.div`
  width: 90%;
  min-width: 300px;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Slider = styled.div`
  width: 100%;
  max-width: 500px;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Detail = styled.div``;
const DetailTitle = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
`;
const DetailText = styled.div`
  margin-bottom: 30px;
  padding: 8px 16px;
  height: 120px;
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;

    border: 7px solid rgba(0, 0, 0, 0.8);
  }
  &::-webkit-scrollbar-track {
    background: transpl; /* 스크롤바 뒷 배경 색상 */
  }
  background-color: rgba(0, 0, 0, 0);
  p {
    font-size: 18px;
  }
`;
const Text = styled.div`
  display: flex;
  line-height: 20px;
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
  gap: 25px;
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
  start: (custom: { isReverse: boolean; sliderWidth: number }) => ({
    x: custom.isReverse ? -custom.sliderWidth : custom.sliderWidth,
  }),
  end: { x: 0 },
  exit: (custom: { isReverse: boolean; sliderWidth: number }) => ({
    x: custom.isReverse ? custom.sliderWidth : -custom.sliderWidth,
  }),
};

interface IProps {
  project: IProject;
}

export default function MProject() {
  const { id } = useParams();
  const project = useRecoilValue(projectsState).find((item) => item.id === id);
  const navigate = useNavigate();
  const [slideNum, setSlideNum] = useState(1);
  const [isReverse, setIsReverse] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const sliderWidth = ref.current?.offsetWidth || 300;
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
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (!project) return;
      setIsReverse(false);
      setSlideNum((prev) => (prev === project.images.length ? 1 : prev + 1));
    }, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [slideNum]);

  function moveBack() {
    navigate(-1);
  }
  function increaseIndex() {
    if (isSliding) {
      return;
    } else {
      setIsSliding(true);
      setIsReverse(false);
      setSlideNum((slideNum) => (slideNum === 6 ? 1 : slideNum + 1));
    }
  }
  function decreaseIndex() {
    if (isSliding) return;
    setIsSliding(true);
    setIsReverse(true);
    setSlideNum((slideNum) => (slideNum === 1 ? 6 : slideNum - 1));
  }

  return (
    <Overlay>
      <ContentsBox>
        <Header>
          <Title>{project?.title}</Title>
          <Description>({project?.description})</Description>
          <Skills>
            <Icons>
              {project?.skills.map((item) => (
                <Icon bgImg={`${process.env.PUBLIC_URL}/images/skills/${item}.png`} key={item}></Icon>
              ))}
            </Icons>
          </Skills>
        </Header>

        <Contents>
          <ContentLeft>
            <Slider ref={ref}>
              <AnimatePresence
                initial={false}
                onExitComplete={() => {
                  setIsSliding(false);
                }}
                custom={{ isReverse, sliderWidth }}
              >
                {project?.images.map((item) =>
                  item === slideNum ? (
                    <SlideImg
                      custom={{ isReverse, sliderWidth }}
                      variants={slideBoxVariant}
                      initial="start"
                      animate="end"
                      exit="exit"
                      transition={{ type: "tween", duration: 1 }}
                      bgImg={`${process.env.PUBLIC_URL}/images/${project.id}/image${slideNum}.png`}
                      key={slideNum}
                    ></SlideImg>
                  ) : null
                )}
              </AnimatePresence>
            </Slider>
            <Buttons>
              <PrevBtn onClick={decreaseIndex}>&larr;</PrevBtn>
              <p>
                {slideNum}/{project?.images.length}
              </p>
              <NextBtn onClick={increaseIndex}>&rarr;</NextBtn>
            </Buttons>
          </ContentLeft>
          <ContentRight>
            <Detail>
              <DetailTitle>주요기능</DetailTitle>
              <DetailText>
                {project?.options.map((option) => (
                  <Text key={option}>
                    <TextMark>✅</TextMark>
                    <TextContent>{option}</TextContent>
                  </Text>
                ))}
              </DetailText>
            </Detail>
          </ContentRight>
          <Links>
            <GithubLink href={project?.github} target="blank">
              Github ↗
            </GithubLink>
            <SiteLink href={project?.domain} target="blank">
              Project ↗
            </SiteLink>
          </Links>
        </Contents>
        <CloseBtn onClick={moveBack}>×</CloseBtn>
      </ContentsBox>
    </Overlay>
  );
}
