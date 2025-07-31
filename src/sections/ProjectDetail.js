import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  padding: 2rem;
`;

const Back = styled.button`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-top: 1rem;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.div`
  margin-top: 2rem;

   ul {
    padding-left: 1.5rem; 
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return <p>존재하지 않는 프로젝트입니다.</p>;

  return (
    <Wrapper
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Back onClick={onClose}>← 닫기</Back>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Image src={project.image} alt={project.title} />
      <Section>
        <h3>🛠 사용 기술</h3>
        <ul>{project.techStack.map((tech, i) => <li key={i}>{tech}</li>)}</ul>
      </Section>
      <Section>
        <h3>✨ 주요 기능</h3>
        <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
      </Section>
      <Section>
        <h3>🧑‍💼 담당 역할</h3>
        <p>{project.role}</p>
      </Section>
      <Section>
        <h3>📅 개발 기간</h3>
        <p>{project.period}</p>
      </Section>
      <Section>
        <h3>📚 배운 점</h3>
        <p>{project.learnings}</p>
      </Section>
    </Wrapper>
  );
};

export default ProjectDetail;