import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.section)`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const ResumeButton = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  padding: 0.7rem 1.2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    background: white;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Contact = () => {
  return (
    <Wrapper
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>📬 Contact</h2>
      <p>📞 전화번호 : 010-2733-2331</p>
      <p>📮 이메일 : <a href="mailto:xodus021211@gmail.com">xodus021211@gmail.com</a></p>
      <p>
        <a
          href="https://github.com/TAEYEN02"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=nvtEH6DpqruC&format=png&color=ffffff"
            alt="GitHub Icon"
            width={20}
            height={20}
          /> : 
          github.com/TAEYEN02
        </a>
      </p>
      <p>
        <a
          href="https://www.notion.so/TAEYEON-21c9363a2b3f80c4b4fcf01003a4d586?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'inherit' }}
        >
          <img
            src="https://img.icons8.com/?size=100&id=v551nqGeHhGn&format=png&color=ffffffff"
            alt="Notion Icon"
            width={20}
            height={20}
          /> : 
          TAEYEON PAGE
        </a>
      </p>

      <ResumeButton href="/resume.pdf" download>
        📄 이력서 다운로드
      </ResumeButton>
    </Wrapper>
  );
};

export default Contact;
