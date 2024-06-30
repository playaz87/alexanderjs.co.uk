import React from 'react';
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { appRoutes } from '../../AppRoutes';

export const HomeLayout = (): React.ReactElement => {
  const { pathname } = useLocation();
  return (
    <Container>
      {!pathname.includes(appRoutes.pokeAPI.path) && <Header />}
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  background-color: var(--accent);
  color: white;
`;

export const HomeCard = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--accent);
  grid-template-areas: 'left right';

  &:nth-of-type(odd) {
    > div {
      grid-area: left;
    }

    > img {
      grid-area: right;
    }
  }

  &:nth-of-type(odd) {
    > div {
      grid-area: right;
    }

    > img {
      grid-area: left;
    }
  }

  > img {
    padding: 0.5rem;
    border-radius: 10px;
    max-width: 100%;
    max-height: 400px;
  }

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
    text-align: center;
  }

  .header {
    font-size: 2rem;
    text-align: center;
  }

  .skills {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    flex-wrap: wrap;
  }
`;
