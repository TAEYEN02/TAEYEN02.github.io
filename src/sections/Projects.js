import { useState, useEffect } from 'react';
import styled from 'styled-components';
import projects from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectDetail from './ProjectDetail';
import { motion } from 'framer-motion';

const Container = styled(motion.section)`
  padding: 4rem 2rem;
  background: #fff;
  position: relative;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  place-items: center;
  overflow: hidden;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const LeftButton = styled(NavButton)`
  left: 0;
`;

const RightButton = styled(NavButton)`
  right: 0;
`;

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width <= 600) setVisibleCount(1);
      else if (width <= 1024) setVisibleCount(2);
      else setVisibleCount(6);
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const maxIndex = Math.max(0, projects.length - visibleCount);

  const visibleProjects = projects.slice(currentIndex, currentIndex + visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - visibleCount));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + visibleCount));
  };

  return (
    <Container 
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}  
    >
      <h2>📁 프로젝트 소개</h2>

      <LeftButton onClick={handlePrev} disabled={currentIndex === 0}>‹</LeftButton>
      <RightButton onClick={handleNext} disabled={currentIndex >= maxIndex}>›</RightButton>

      <Grid>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} {...project} onClick={() => handleCardClick(project)} />
        ))}
      </Grid>

      {selectedProject && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ProjectDetail project={selectedProject} onClose={closeModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Projects;