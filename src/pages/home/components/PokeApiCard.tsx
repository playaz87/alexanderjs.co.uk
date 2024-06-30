import React from 'react';
import { HomeCard } from '../HomeLayout';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import styled from 'styled-components';

export const PokeApiCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard onClick={() => navigate(appRoutes.pokeAPI.nav())}>
      <Img src={'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg'} alt='Poke API' />
    </HomeCard>
  );
};

const Img = styled.img`
  max-width: 100%;
`;
