import React from 'react';
import styled from 'styled-components';
import { HomeCard } from '../HomeLayout';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { Tag } from '../../../common/components/Tag';
import { NavArrow } from '../../../common/components/NavArrow';

export const ShinBaramCard = (): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <HomeCard>
      <div>
        <div className={'header'}>Shinbaram</div>
        <div>A secondhand market place for agricultural products</div>
        <div className={'skills'}>
          <Tag label={'React'} />
          <Tag label={'GraphQL'} />
          <Tag label={'Styled Components'} />
          <Tag label={'Capacitor JS'} />
          <Tag label={'Ionic'} />
          <Tag label={'HTML'} />
          <Tag label={'CSS'} />
          <Tag label={'Firebase'} />
        </div>
        <NavArrow onClick={() => navigate(appRoutes.shinbaram.nav())} direction={'forward'} />
      </div>
      <Img src={'/icons/shinbaram.png'} />
    </HomeCard>
  );
};

const Img = styled.img`
  padding: 1rem;
  max-width: 100%;
  max-height: 300px;
`;
