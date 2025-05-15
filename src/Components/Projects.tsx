import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.theme.bgColor};
`
  
function Projects() {
  return (
    <Container>
    </Container>
  )
}

export default Projects
