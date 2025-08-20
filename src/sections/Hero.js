import styled from "styled-components";
import { motion } from "framer-motion";

// ✅ Hero 섹션
const Wrapper = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.68)), 
    url("/images/hero-bg.jpg") center/cover no-repeat;
  color: white;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.1rem;
  margin-top: 1.5rem;
  line-height: 1.8;
  color: #eee;
`;

const Strong = styled.span`
  color: #90E0EF;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ExternalButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #90E0EF;
  color: #000;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #48CAE4;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

const Hero = () => {
  return (
    <>
      <Wrapper
        id="home"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Heading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          안녕하세요! 서버부터 화면까지 아우르며 서비스를 완성해가는 개발자 김태연입니다.
        </Heading>
        <Paragraph
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          사용자 중심의 서비스를 만들기 위해 <Strong>끊임없이 고민</Strong>하고 도전하고 있습니다. <br />
          기능 하나에도 <Strong>이유를 담고</Strong>, 코드를 통해 <Strong>가치를 전달하는 개발자</Strong>가 되고 싶습니다. <br />
          작은 프로젝트도 <Strong>끝까지 책임지는 자세</Strong>로, 더 나은 서비스와 함께 성장해 나가겠습니다.
        </Paragraph>
        <ButtonGroup>
          <ExternalButton
            href="https://www.notion.so/TAEYEON-21c9363a2b3f80c4b4fcf01003a4d586"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src="https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=000000"
              alt="GitHub Icon"
            /> Notion
          </ExternalButton>

          <ExternalButton
            href="https://github.com/TAEYEN02"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <img
              src="https://img.icons8.com/?size=100&id=v551nqGeHhGn&format=png&color=000000"
              alt="GitHub Icon"
            /> GitHub 
          </ExternalButton>
        </ButtonGroup>

      </Wrapper>


    </>
  );
};

export default Hero;
