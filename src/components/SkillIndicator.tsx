import React from 'react';
import type { Skill } from './Skills.tsx';
import styled from 'styled-components';

interface Props {
  skill: Skill;
}

export const SkillIndicator: React.FC<Props> = ({ skill }) => {
  return (
    <Container>
      <Bar $percent={skill.points}></Bar>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-left: auto;
`;

const Bar = styled.div<{ $percent: number }>`
  width: 100%;
  height: 0.8rem;
  border-radius: 10000px;
  border: 1px solid var(--accent);
  background-color: white;
  overflow: hidden;
  background-clip: content-box;
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    border-image: fill 1 linear-gradient(to right, var(--accent), ${props => props.$percent}%, white, ${props => props.$percent}%, white);
  }
`;
