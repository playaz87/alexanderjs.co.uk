import React from 'react';
import { HomeCard } from '../HomeLayout';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import styled from 'styled-components';
import { Tag } from '../../../common/components/Tag';
import { NavArrow } from '../../../common/components/NavArrow';

export const PokeApiCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard>
      <div>
        <div className={'header'}>RESTful API demo</div>
        <div className={'skills'}>
          <Tag label={'React'} />
          <Tag label={'TypeScript'} />
          <Tag label={'HTML'} />
          <Tag label={'CSS'} />
          <Tag label={'Styled Components'} />
          <Tag label={'Axios'} />
        </div>
        <NavArrow onClick={() => navigate(appRoutes.pokeAPI.nav())} direction={'forward'} />
      </div>
      <Img src={'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg'} alt='Poke API' />
    </HomeCard>
  );
};

const Img = styled.img`
  max-width: 100%;
`;
