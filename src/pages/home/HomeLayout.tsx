import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';

export const HomeLayout = (): React.ReactElement => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  --_header-height: 5rem;
  display: contents;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--bg-2);
  color: white;
  padding-inline: 2rem;

  @media (min-width: 1024px) {
    padding-inline: 6rem;
  }

  @media (min-width: 820px) {
    padding-inline: 3rem;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  //margin-top: var(--_header-height);
  background-color: var(--bg-2);
  color: var(--mono-60);
`;
