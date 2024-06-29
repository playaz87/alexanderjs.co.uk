import React from 'react';
import styled, { keyframes } from 'styled-components';

export const BackArrow = (props: React.HTMLProps<HTMLDivElement>): React.ReactElement => {
  return (
    <Container {...props}>
      <span />
      <span />
      <span />
    </Container>
  );
};

const animate = keyframes`
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
`;

const Container = styled.div`
  transform: translateX(4vw) rotate(90deg);
  cursor: pointer;

  > span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: ${animate} 2s infinite;
  }

  > span:nth-child(2) {
    animation-delay: -0.2s;
  }

  > span:nth-child(3) {
    animation-delay: -0.4s;
  }
`;
