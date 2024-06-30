import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { appRoutes } from '../../AppRoutes';

export const BackArrow = (props: React.HTMLProps<HTMLDivElement>): React.ReactElement => {
  const { pathname } = useLocation();
  const stack = useRef<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    stack.current.push(pathname);
  }, [pathname]);

  const handleBack = () => {
    stack.current.pop();
    let prev = stack.current.pop();
    if (!prev) {
      return navigate('/');
    }

    const pokeApiIdx = prev.indexOf(appRoutes.pokeAPI.path);
    while (prev && pokeApiIdx > -1 && prev.length > appRoutes.pokeAPI.path.length) {
      prev = stack.current.pop();
    }

    navigate(prev ?? '/');
  };

  return (
    <Container onClick={handleBack}>
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

const Container = styled.div`
  width: 6rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

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
