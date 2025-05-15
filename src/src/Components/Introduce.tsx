import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.theme.bgColor};
`
const Inner = styled.div`
  width: 1200px;
  height: 650px;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: 48px;
  font-weight: 600;
`
const Contents = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 8fr;
`
const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &:last-child {
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }
`
const ProfileCard = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px;
  background-color: ${props=>props.theme.textColor};
`
const ImageArea = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  perspective: 600px;
  &:hover {
     div:nth-child(1) {
      transform: rotateY(-180deg);
    }
    div:nth-child(2) {
      transform: rotateY(0deg);
    }
  }
`
const Image = styled(motion.div)<{img:string}>`
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  transition: 0.5s;
  backface-visibility: hidden;
  background-image: url(${props=>props.img});
  background-size: contain;
  background-position: center;
  background-color: #888;
  &:nth-child(2) {
    transform: rotateY(-180deg);
  }
`
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Info = styled.div`
  width: 200px;
  margin-bottom: 8px;
  display: flex;
  justify-content: left;
  color: ${props=>props.theme.bgColor};
  font-size: 18px;
  span {
    display: block;
    position: relative;
    &:nth-child(1) {
      font-weight: 600;
    }
    &:nth-child(2) {
      margin-left: 8px;
    }
  }
`
const Icons = styled.div`
width: 200px;
padding-top: 8px;
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 8px 0;
`
const Icon = styled.div<{icon:string}>`
  width: 45px;
  height: 45px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #ddd;
  background-image: url(${props=>props.icon});
  background-size: contain;
  background-position: center;
`
const TextBox = styled.div`
`
const Subject = styled.p`
  margin-bottom: 8px;
  font-size: 26px;
  font-weight: 600;
`
const Text = styled.p`
  padding:12px;
  border: 2px solid ${props=>props.theme.textColor};
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  background-color: rgba(0,0,0,0.5);
  
`

function Introduce() {
  return (
    <Container>
      <Inner>
        <Title>Introduce</Title>
        <Contents>
          <Section>
            <ProfileCard>
              <ImageArea>
                <Image img={`${process.env.PUBLIC_URL}/images/wholesome-gee.png`} style={{zIndex:1}} />
                <Image img={`${process.env.PUBLIC_URL}/images/wholesome-geebri.png`} />
              </ImageArea>
              <InfoArea>
                <Info>
                  <span>이름 :</span>
                  <span>전지용</span>
                </Info>
                <Info>
                  <span>생년월일 :</span>
                  <span>94.04.19</span>
                </Info>
                <Info>
                  <span>지원분야 :</span>
                  <span>Front End</span>
                </Info>
                <Info>
                  <span>장점 :</span>
                  <span>열정, 성실, 끈기</span>
                </Info>
                <Info>
                  <span>스킬 :</span>
                </Info>
                <Icons>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/html.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/css.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/js.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/node.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/ts.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/styled-components.png`}/>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/react.png`}/>
                </Icons>
              </InfoArea>
            </ProfileCard>
          </Section>
          <Section>
            <TextBox>
              <Subject>Character😊</Subject>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
              </Text>
            </TextBox>
            <TextBox>
              <Subject>Motivation🔥</Subject>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
              </Text>
            </TextBox>
            <TextBox>
              <Subject>Goal🚩</Subject>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est, iusto hic quas a tempore quae dignissimos optio modi reiciendis id, aperiam saepe? Aut quis corrupti ad minima perspiciatis alias!
              </Text>
            </TextBox>
          </Section>
        </Contents>
      </Inner>
    </Container>
  )
}

export default Introduce
