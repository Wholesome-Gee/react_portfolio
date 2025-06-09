import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { projectsState } from "../../atoms";

const Container = styled.div`
  padding: 10% 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;
const Title = styled.div`
  margin-bottom: 10%;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
`;
const ProjectBox = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;
const Project = styled.div`
  margin-bottom: 30px;
  min-width: 350px;

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
`;

export default function MProjects() {
  const projects = useRecoilValue(projectsState);

  return (
    <Container>
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
    </Container>
  );
}
