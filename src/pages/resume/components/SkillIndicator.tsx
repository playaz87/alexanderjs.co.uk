import React from 'react';
import type { Skill } from './Skills.tsx';
import styled from 'styled-components';
import { animated, useSpring } from '@react-spring/web';

interface Props {
  skill: Skill;
}

export const SkillIndicator: React.FC<Props> = ({ skill }) => {
  const springProps = useSpring({
    from: { width: 0 },
    to: { width: skill.points },
    config: { tension: 170, friction: 26 },
  });

  return (
    <Container>
      <BarWrapper>
        <Bar $percent={skill.points} style={springProps} />
      </BarWrapper>
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

const BarWrapper = styled.div`
  width: 100%;
  height: 0.8rem;
  border-radius: 10000px;
  border: 1px solid var(--accent);
  background-color: white;
  overflow: hidden;
  background-clip: content-box;
  position: relative;
`;

const Bar = styled(animated.div)<{ $percent: number }>`
  width: ${props => props.$percent}px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--accent);
`;
