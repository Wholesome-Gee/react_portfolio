import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 200px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  background-color: teal;
`;
const Inner = styled.div`
  width: 1200px;
  height: 650px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
`;
const ProjectBox = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
`;
const Project = styled.div`
  margin-bottom: 20px;
  img {
    width: 350px;
    height: 200px;
  }
  p {
    width: 350px;
    padding-top: 8px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
`;
function Projects() {
  return (
    <Container>
      <Inner>
        <Title>Projects</Title>
        <ProjectBox>
          <Link to={"/project/:id"}>
            <Project>
              <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
              <p>YOUTUBE 클론코딩</p>
            </Project>
          </Link>
          <Project>
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
            <p>YOUTUBE 클론코딩</p>
          </Project>
          <Project>
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
            <p>YOUTUBE 클론코딩</p>
          </Project>
          <Project>
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
            <p>YOUTUBE 클론코딩</p>
          </Project>
          <Project>
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
            <p>YOUTUBE 클론코딩</p>
          </Project>
          <Project>
            <img src={`${process.env.PUBLIC_URL}/images/youtube.png`} alt="" />
            <p>YOUTUBE 클론코딩</p>
          </Project>
        </ProjectBox>
      </Inner>
    </Container>
  );
}

export default Projects;
