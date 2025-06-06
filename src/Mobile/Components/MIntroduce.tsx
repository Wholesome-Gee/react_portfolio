import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  overflow: hidden;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  margin-bottom: 36px;
  font-size: 48px;
  font-weight: 600;
`;
const Contents = styled.div`
  height: 100%;
  display: flex;
`;
const Section = styled.div`
  height: 630px;
  display: flex;
  &:first-child {
    width: 350px;
  }
  &:last-child {
    width: 850px;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const ProfileCard = styled.div`
  padding: 40px 0;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 16px;
  background-color: ${(props) => props.theme.textColor};
`;
const ImageArea = styled.div`
  width: 240px;
  height: 240px;
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
`;
const Image = styled(motion.div)<{ img: string }>`
  width: 240px;
  height: 240px;
  position: absolute;
  border-radius: 50%;
  transition: 0.5s;
  backface-visibility: hidden;
  background-image: url(${(props) => props.img});
  background-size: contain;
  background-position: center;
  background-color: #888;
  &:nth-child(2) {
    transform: rotateY(-180deg);
  }
`;
const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
const Info = styled.div`
  width: 240px;
  margin-bottom: 8px;
  display: flex;
  justify-content: left;
  color: ${(props) => props.theme.bgColor};
  font-size: 20px;
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
`;
const Icons = styled.div`
  width: 240px;
  padding-top: 8px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px 0;
`;
const Icon = styled.div<{ icon: string }>`
  width: 50px;
  height: 50px;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #ddd;
  background-image: url(${(props) => props.icon});
  background-size: contain;
  background-position: center;
`;
const Subject = styled.div`
  width: 100%;
`;
const SubjectTitle = styled.p`
  height: 35px;
  font-size: 26px;
  font-weight: 600;
`;
const TextBox = styled.div`
  padding: 4px 0;
  height: 160px;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Text = styled.div`
  padding: 0 12px;

  opacity: 0.4;
  transition: all 0.1s ease-in-out;
  &:hover {
    opacity: 1;
  }
  h1 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 4px 0;
  }
  p {
    margin-bottom: 12px;
  }
`;

function MIntroduce() {
  return (
    <Container>
      <Inner>
        <Title>Introduce</Title>
        <Contents>
          <Section>
            <ProfileCard>
              <ImageArea>
                <Image img={`${process.env.PUBLIC_URL}/images/wholesome-gee.png`} style={{ zIndex: 1 }} />
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
                  <span>스킬🔻</span>
                </Info>
                <Icons>
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/html.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/css.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/js.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/node.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/ts.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/styled-components.png`} />
                  <Icon icon={`${process.env.PUBLIC_URL}/images/skills/react.png`} />
                </Icons>
              </InfoArea>
            </ProfileCard>
          </Section>
          <Section>
            <Subject>
              <SubjectTitle>성격 및 특징😊</SubjectTitle>
              <TextBox>
                <Text>
                  <h1>1. 개발에 대한 열정으로 끊임없이 성장하는 개발자</h1>
                  <p>
                    절대 뒤쳐지지 않는 개발에 대한 열정과 '아는것은 활용하고, 모르는것은 습득한다.'라는 마인드를 갖고,
                    <br />
                    지속적인 자기발전을 통해 끊임없이 성장하는 개발자가 되고자 하는 욕망을 품고 있습니다.
                  </p>
                </Text>
                <Text>
                  <h1>2. 끈질긴 근성, 단단한 멘탈로 어떤 어려움도 헤쳐나가는 자신감이 넘치는 개발자 </h1>
                  <p>
                    승부욕이 강하여 스스로가 무너지는것을 그 무엇보다 싫어합니다.
                    <br /> 위기를 기회로, 불가능을 가능으로 만들며 얻어지는 달콤한 성취감을 얻기위해서 무한히
                    노력합니다.
                  </p>
                </Text>

                <Text>
                  <h1>3. 긍정적 사고, 밝은 에너지로 커뮤니케이션을 통한 시너지를 창출하는 개발자 </h1>
                  <p>
                    기획자로 일을하며 협업에 있어 중요한건 상호간의 소통임을 배우고 느꼈습니다.
                    <br /> 편안한 분위기와 밝은 에너지로 소통에 활력을 불어넣고,
                    <br />
                    명확한 의사 전달과 의견 수렴으로 최고의 결과물을 도출하기위해 최선을 다합니다.
                  </p>
                </Text>
                <Text>
                  <h1>4. 책임감이 강하고 근면성실한 개발자 </h1>
                  <p>
                    제게 근면성실은 단순히 부지런하다는 의미를 넘어, 매사에 정성을 다하고 바른 마음가짐을 갖고 일함을
                    의미합니다.
                    <br />
                    맡은 업무에 책임과 최선을 다하고 사내에 모범이 되어, 동료들에게 귀감이 될 수 있는 개발자, 회사의
                    일원이 되겠습니다.
                  </p>
                </Text>
              </TextBox>
            </Subject>
            <Subject>
              <SubjectTitle>프론트엔드 개발자가 되고자 하는 이유🔥</SubjectTitle>
              <TextBox>
                <Text>
                  <h1>1. 호기심이 자극되어 입문하게 된 개발자의 길</h1>
                  <p>
                    즐겨보는 유튜브 채널에서 온라인쇼핑몰을 제작하였고, 깔끔한 디자인에 매료되었습니다.
                    <br />
                    해당 쇼핑몰을 보며 웹사이트 제작 비용과 방법에 대한 궁금증이 생겼고,
                    <br /> 나도 손수 편리하고 예쁜 홈페이지를 만들어보고 싶다는 생각이 들며 개발 직군에 관심을 갖게
                    되었습니다.
                    <br />
                  </p>
                </Text>
                <Text>
                  <h1>2. 호기심이 자극되어 입문하게 된 개발자의 길</h1>
                  <p>
                    저는 작곡을 전공했고, 공연 및 행사 기획자로 일한 경험이 있습니다. 두 분야의 공통점은 결과물이 예상과
                    다를 수 있고, <br />
                    정해진 정답은 없다는 점이었습니다. 이 점은 저에게 끊임없는 불안을 심어주었습니다. <br /> 하지만
                    웹개발을 공부하며, 내가 쓴 코드들이 즉각적인 결과로 반영되는 과정을 경험하면서 성취감을 느꼈고,{" "}
                    <br />
                    낯선 개념들을 하나씩 습득할 때마다 한 걸음 더 정진한다는 느낌이 점점 매력적으로 다가왔습니다.
                  </p>
                </Text>
                <Text>
                  <h1>3. 무한히 느껴지는 성취감과 도전정신</h1>
                  <p>
                    각 프로젝트를 만들며 여러번 버그를 마주하게 되었고, 커뮤니티와 인터넷강의를 뒤적이며 디버깅을
                    해나갔습니다.
                    <br /> 처음 방해물처럼 느껴졌던 버그와 에러들은 결국 저를 더 성장시키는 밑거름이 되었고, <br />
                    디버깅하는 모든 과정은 나를 한 단계 더 성장시키는 승급심사라고 여겨지며, <br />
                    성취감과 도전정신이 솟구치는 것을 보고 개발자라는 직업이 적성에 맞는 직업이라고 생각했습니다.
                  </p>
                </Text>
              </TextBox>
            </Subject>
            <Subject>
              <SubjectTitle>개발자로서의 목표🚩</SubjectTitle>
              <TextBox>
                <Text>
                  <h1>1. 사용자 중심의 UI/UX 설계 능력 향상</h1>
                  <p>
                    유저들이 이용하기 편리하도록 직관적이며 깔끔한 디자인의 UI/UX를 갖춘 웹페이지를 만들어 사용자 경험을
                    최우선으로 생각하는 개발자가 되고 싶습니다.
                  </p>
                </Text>
                <Text>
                  <h1>2. 시장의 트렌드를 정확히 파악하고, 혁신적인 개발 능력 향상 </h1>
                  <p>
                    빠르게 변화하는 프론트엔드 시장에서 최신 기술과 트렌드를 적극적으로 습득하며 끊임없이 성장하고,
                    <br />
                    나아가 트렌드의 선두주자인 얼리어답터 개발자로 자리매김할 것입니다.
                  </p>
                </Text>
                <Text>
                  <h1>3. 기술, 소통, 리더십등 다방면으로 능한 육각형 개발자</h1>
                  <p>
                    기술적 역량 강화와 원활한 소통을 동반한 개발 및 협업능력을 갖추어
                    <br /> 기업의 차세대를 이끌어갈 리더 개발자가 될 것입니다.
                  </p>
                </Text>
              </TextBox>
            </Subject>
          </Section>
        </Contents>
      </Inner>
    </Container>
  );
}

export default MIntroduce;
