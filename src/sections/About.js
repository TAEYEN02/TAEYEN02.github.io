import styled from "styled-components";
import { motion } from "framer-motion";
// import profileImage from "../assets/profile.jpg"; // 실제 경로에 맞게 수정

const Wrapper = styled(motion.section)`
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bg};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
`;

const ImageBox = styled.div`
  flex: 1 1 250px;
  text-align: center;

  img {
    width: 250px;
    height: 350px;
    object-fit: cover;
    border: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

const InfoBox = styled.div`
  flex: 2 1 400px;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p, ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    margin-bottom: 0.4rem;
  }
`;

const About = () => {
    return (
        <Wrapper
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2>ABOUT ME</h2>
            <Content>
                <ImageBox>
                    <img src={'/images/taeyeon.jpg'} alt="프로필 사진" />
                </ImageBox>
                <InfoBox>
                    <Section>
                        <h3>🎓 학력</h3>
                        <p>경동대학교 소프트웨어학과 졸업</p>
                        <small>2021.03 ~ 2025.02</small>
                    </Section>
                    <Section>
                        <h3>💻 기술 스택</h3>
                        <ul>
                            <li><strong>Frontend</strong>: React, React Native, JavaScript (ES6+), Styled-components</li>
                            <li><strong>Backend</strong>: Spring Boot, Java, Node.js, RESTful API 설계, MySQL, Firebase (Authentication, Realtime DB)</li>
                            <li><strong>DevOps & Deployment</strong>: AWS (S3, Route53, CloudFront, Elastic Beanstalk), GitHub Pages</li>
                            <li><strong>Tooling & Collaboration</strong>: Git, GitHub, Postman, VSCode</li>
                        </ul>
                    </Section>
                    <Section>
                        <h3>🛠 핵심 기술</h3>
                        <ul>
                            <li>JavaScript, Node.js를 중심으로 풀스택 개발 프로젝트 수행</li>
                            <li>React 기반 UI 개발 및 Spring Boot 기반 REST API 구축</li>
                            <li>Firebase와 MySQL을 이용한 데이터 관리 및 인증 처리</li>
                        </ul>
                    </Section>
                    <Section>
                        <h3>☁️ 배포 경험</h3>
                        <p>AWS S3 + Route53 + CloudFront를 활용하여 정적 웹 배포, 도메인 연결, HTTPS 인증서 적용까지 직접 구성하였습니다.</p>
                    </Section>
                    <Section>
                        <h3>📚 교육</h3>
                        <strong>AWS 클라우드를 확용한 풀스택 개발 | 코리아IT아카데미</strong><br />
                        <small>2025.02 ~ 2025.08</small>
                        <p>JAVA, JSP, Spring, SpringBoot, JavaScript 등 웹개발 전반 프로젝트 진행</p>
                    </Section>
                    <Section>
                        <h3>🚀 각오</h3>
                        <p>문제를 피하지 않고, 해답을 찾아가는 개발자입니다. 처음엔 몰라도, 끝까지 파고들어 해결하는 것이 제 개발 철학입니다.
                            실제 사용자에게 전달되는 서비스 품질을 가장 중요하게 생각합니다.</p>
                    </Section>
                </InfoBox>
            </Content>
        </Wrapper>
    );
};

export default About;
