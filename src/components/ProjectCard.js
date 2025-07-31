import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  max-width: 300px;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const ClickableArea = styled.div`
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0 0.5rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  padding: 0 1rem 1rem;
`;

const Button = styled.a`
  padding: 0.4rem 0.8rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 6px;
  font-size: 0.8rem;
  text-align: center;
`;

const ProjectCard = ({ title, description, image, github, demo, onClick }) => {
  return (
    <Card>
      <ClickableArea onClick={onClick}>
        <Thumbnail src={image} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Content>
      </ClickableArea>

      <Divider />

      <ButtonGroup>
        {github && <Button href={github} target="_blank" onClick={(e) => e.stopPropagation()}>GitHub</Button>}
        {demo && <Button href={demo} target="_blank" onClick={(e) => e.stopPropagation()}>Demo</Button>}
      </ButtonGroup>
    </Card>
  );
};

export default ProjectCard;
