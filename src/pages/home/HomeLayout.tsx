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
`;

export const HomeCard = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  background-color: rgb(40 169 199 / 8%);
  cursor: pointer;
  box-shadow: 4px 6px 5px 1px #b1aeae8a;
`;
