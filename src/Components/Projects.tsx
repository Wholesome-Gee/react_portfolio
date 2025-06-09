import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { projectsState } from "../atoms";

const Container = styled.div`
  padding: 200px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;
const Inner = styled.div`
  width: 1200px;
  height: auto;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Project = styled.div`
  margin-bottom: 30px;
  img {
    width: 350px;
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

  return (
    <Container>
      <Inner>
        <Title>Projects</Title>
        <ProjectBox>
          {projects.map((project) => {
            return (
              <Link to={`/project/${project.id}`} key={project.id}>
                <Project>
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
