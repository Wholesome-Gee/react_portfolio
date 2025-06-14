import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { IMode, modeSelector, projectsState } from "../atoms";

const Container = styled.div<IMode>`
  padding: ${(props) => (props.mode === "desktop" ? "100px" : props.mode === "tablet" ? "90px 40px" : "80px 20px")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;
const Inner = styled.div<IMode>`
  width: ${(props) => (props.mode === "desktop" ? "1200px" : "100%")};
  display: ${(props) => (props.mode === "mobile" ? "flex" : "block")};
  flex-direction: ${(props) => (props.mode === "mobile" ? "column" : "row")};
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.div<IMode>`
  margin-bottom: ${(props) => (props.mode === "mobile" ? "24px" : "36px")};
  font-size: ${(props) => (props.mode === "desktop" ? "48px" : props.mode === "tablet" ? "42px" : "36px")};
  font-weight: 600;
  text-align: ${(props) => (props.mode === "mobile" ? "center" : "left")};
`;
const ProjectBox = styled.div<IMode>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.mode === "mobile" ? "column" : "row")};
  justify-content: ${(props) => (props.mode === "tablet" ? "space-around" : "flex-start")};
  align-items: center;
  gap: ${(props) => (props.mode === "mobile" ? "50px" : props.mode === "tablet" ? "0" : "75px")};
`;
const Project = styled.div<IMode>`
  margin-bottom: ${(props) => (props.mode === "mobile" ? "8px" : "30px")};
  img {
    width: ${(props) => (props.mode === "tablet" ? "340px" : "350px")};
    height: 200px;
    transition: all 0.2s ease-in-out;
  }
  p {
    width: 350px;
    padding-top: 8px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
  }
  &:hover img {
    transform: scale(1.05) translateY(-10px);
  }
`;

function Projects() {
  const projects = useRecoilValue(projectsState);
  const [mode, setMode] = useRecoilState(modeSelector);

  return (
    <Container mode={mode}>
      <Inner mode={mode}>
        <Title mode={mode}>Projects</Title>
        <ProjectBox mode={mode}>
          {projects.map((project) => {
            return (
              <Link to={`/project/${project.id}`} key={project.id}>
                <Project mode={mode}>
                  <img src={`${process.env.PUBLIC_URL}/images/${project.id}/image1.png`} alt="" />
                  <p>{project.title}</p>
                </Project>
              </Link>
            );
          })}
        </ProjectBox>
      </Inner>
    </Container>
  );
}

export default Projects;
