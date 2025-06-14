import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMode, IProject, modeSelector, projectsState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";

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
const ContentsBox = styled.div<IMode>`
  width: ${(props) => (props.mode === "mobile" ? "375px" : props.mode === "tablet" ? "760px" : "1150px")};
  height: ${(props) => (props.mode === "mobile" ? "540px" : props.mode === "tablet" ? "800px" : "700px")};
  padding: ${(props) =>
    props.mode === "mobile" ? "20px 10px" : props.mode === "tablet" ? "20px 20px 115px 20px" : "40px 20px"};
  position: relative;
  border: 4px solid ${(props) => props.theme.pointColor};
  background-color: ${(props) => props.theme.bgColor};
`;
const Header = styled.div<IMode>`
  display: flex;
  flex-direction: ${(props) => (props.mode === "desktop" ? "row" : "column")};
  align-items: ${(props) => (props.mode === "desktop" ? "flex-end" : "center")};
  gap: ${(props) => (props.mode === "desktop" ? "4px" : "8px")};
`;
const Title = styled.div<IMode>`
  font-size: ${(props) => (props.mode === "mobile" ? "24px" : "32px")};
  font-weight: 600;
`;
const Description = styled.div<IMode>`
  font-size: ${(props) => (props.mode === "mobile" ? "14px" : "18px")};
`;
const Contents = styled.div<IMode>`
  padding: ${(props) => (props.mode === "mobile" ? "20px 0" : props.mode === "tablet" ? "40px 0 60px 0" : "40px 0")};
  height: ${(props) => (props.mode === "mobile" ? "350px" : props.mode === "tablet" ? "100%" : "550px")};
  display: flex;
  flex-direction: ${(props) => (props.mode === "desktop" ? "row" : "column")};
  justify-content: ${(props) => (props.mode === "tablet" ? "flex-start" : "space-between")};
`;
const ContentLeft = styled.div<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "710px" : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${(props) => (props.mode === "tablet" ? "center" : "flex-start")};
`;
const Slider = styled.div<IMode>`
  width: ${(props) => (props.mode === "mobile" ? "355px" : props.mode === "tablet" ? "400px" : "100%")};
  height: ${(props) => (props.mode === "mobile" ? "180px" : props.mode === "tablet" ? "240px" : "100%")};
  border: 1px solid white;
  position: relative;
  overflow: hidden;
`;
const SlideImg = styled(motion.div)<{ bgImg: string; mode: string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center center;
`;
const Buttons = styled.div<IMode>`
  padding: ${(props) => (props.mode === "mobile" ? "8px 0" : "14px 0")};
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
const PrevBtn = styled.button<IMode>``;
const NextBtn = styled.button<IMode>``;
const ContentRight = styled.div<IMode>`
  padding-left: ${(props) => (props.mode === "desktop" ? "20px" : "0")};
  width: ${(props) => (props.mode === "desktop" ? "400px" : "100%")};
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Skills = styled.div<IMode>`
  margin-bottom: ${(props) => (props.mode === "desktop" ? "40px" : "10px")};
  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
const Icons = styled.div<IMode>`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Icon = styled.div<{ bgImg: string; mode: string }>`
  width: ${(props) => (props.mode === "mobile" ? "30px" : "40px")};
  height: ${(props) => (props.mode === "mobile" ? "30px" : "40px")};
  border-radius: 50%;
  background-image: ${(props) => `url(${props.bgImg})`};
  background-size: cover;
  background-position: center;
  background-color: ${(props) => props.theme.textColor};
`;
const Detail = styled.div<IMode>``;
const DetailTitle = styled.div<IMode>`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;
const DetailText = styled.div<IMode>`
  margin-bottom: ${(props) => (props.mode === "mobile" ? "0" : "10px")};
  padding: 8px 16px;
  height: ${(props) => (props.mode === "desktop" ? "270px" : "120px")};
  border: 1px solid white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.mode === "mobile" ? "8px" : "16px")};
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
  span {
    font-size: ${(props) => (props.mode === "desktop" ? "16px" : "14px")};
  }
`;
const Text = styled.div<IMode>`
  display: flex;
  line-height: 20px;
`;
const TextMark = styled.span<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "30px" : "20px")};
  margin-right: 4px;
`;
const TextContent = styled.span<IMode>``;
const Links = styled.div<IMode>`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: ${(props) => (props.mode === "mobile" ? "15px" : "40px")};
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
const GithubLink = styled.a<IMode>``;
const SiteLink = styled.a<IMode>``;

const CloseBtn = styled.div<IMode>`
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
  start: (custom: { isReverse: boolean; mode: string }) => ({
    x: custom.isReverse ? (custom.mode === "mobile" ? -355 : -710) : custom.mode === "mobile" ? 355 : 710,
  }),
  end: {
    x: 0,
  },
  exit: (custom: { isReverse: boolean; mode: string }) => ({
    x: custom.isReverse ? (custom.mode === "mobile" ? 355 : 710) : custom.mode === "mobile" ? -355 : -710,
  }),
};

interface IProps {
  project: IProject;
}

function Project() {
  const [mode, setMode] = useRecoilState(modeSelector);
  const { id } = useParams();
  const project = useRecoilValue(projectsState).find((item) => item.id === id);
  const navigate = useNavigate();
  const [slideNum, setSlideNum] = useState(1);
  const [isReverse, setIsReverse] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const maxSlideNum = project?.images.length;
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
      setSlideNum((prev) => (prev === maxSlideNum ? 1 : prev + 1));
    }, 4000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [slideNum]);

  function moveBack() {
    navigate(-1);
  }
  function increaseIndex() {
    if (maxSlideNum === undefined) return;
    if (isSliding) return;
    setIsSliding(true);
    setIsReverse(false);
    setSlideNum((slideNum) => (slideNum === maxSlideNum ? 1 : slideNum + 1));
  }
  function decreaseIndex() {
    if (maxSlideNum === undefined) return;
    if (isSliding) return;
    setIsSliding(true);
    setIsReverse(true);
    setSlideNum((slideNum) => (slideNum === 1 ? maxSlideNum : slideNum - 1));
  }

  return (
    <Overlay>
      <ContentsBox mode={mode}>
        <Header mode={mode}>
          <Title mode={mode}>{project?.title}</Title>
          <Description mode={mode}>({project?.description})</Description>
        </Header>

        <Contents mode={mode}>
          <ContentLeft mode={mode}>
            <Slider mode={mode}>
              <AnimatePresence
                initial={false}
                onExitComplete={() => {
                  setIsSliding(false);
                }}
                custom={{ isReverse, mode }}
              >
                {project?.images.map((item) =>
                  item === slideNum ? (
                    <SlideImg
                      mode={mode}
                      custom={{ isReverse, mode }}
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
            <Buttons mode={mode}>
              <PrevBtn mode={mode} onClick={decreaseIndex}>
                &larr;
              </PrevBtn>
              <p>
                {slideNum}/{project?.images.length}
              </p>
              <NextBtn mode={mode} onClick={increaseIndex}>
                &rarr;
              </NextBtn>
            </Buttons>
          </ContentLeft>
          <ContentRight mode={mode}>
            <Skills mode={mode}>
              {mode === "mobile" ? null : <p>Skills</p>}
              <Icons mode={mode}>
                {project?.skills.map((item) => (
                  <Icon mode={mode} bgImg={`${process.env.PUBLIC_URL}/images/skills/${item}.png`} key={item}></Icon>
                ))}
              </Icons>
            </Skills>
            <Detail mode={mode}>
              {mode === "mobile" ? null : <DetailTitle mode={mode}>프로젝트 설명</DetailTitle>}
              <DetailText mode={mode}>
                {project?.options.map((option) => (
                  <Text mode={mode} key={option}>
                    <TextMark mode={mode}>✅</TextMark>
                    <TextContent mode={mode}>{option}</TextContent>
                  </Text>
                ))}
              </DetailText>
            </Detail>
          </ContentRight>
          <Links mode={mode}>
            <GithubLink mode={mode} href={project?.github} target="blank">
              Github ↗
            </GithubLink>
            <SiteLink mode={mode} href={project?.domain} target="blank">
              Project ↗
            </SiteLink>
          </Links>
        </Contents>
        <CloseBtn mode={mode} onClick={moveBack}>
          ×
        </CloseBtn>
      </ContentsBox>
    </Overlay>
  );
}

export default Project;
