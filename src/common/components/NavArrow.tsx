import React from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  onClick: () => void;
  direction: 'forward' | 'backward';
}

export const NavArrow: React.FC<Props> = ({ onClick, direction }) => {
  return (
    <Container onClick={onClick} $direction={direction}>
      <span />
      <span />
      <span />
    </Container>
  );
};

const animate = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const Container = styled.div<{ $direction: 'forward' | 'backward' }>`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  rotate: ${props => (props.$direction === 'forward' ? '180deg' : '0deg')};

  > span {
    width: 0;
    height: 0;
    display: block;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-right: 10px solid white;
    animation: ${animate} 2s linear infinite;
  }

  > span:nth-child(2) {
    animation-delay: -0.2s;
  }

  > span:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
