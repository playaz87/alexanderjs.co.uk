import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { Tag } from '../../../common/components/Tag';
import { NavArrow } from '../../../common/components/NavArrow';

export const Td2Card = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard>
      <div>
        <div className={'header'}>Tome of D2</div>
        <Content>
          The world&apos;s most popular <span>Diablo 2</span> companion app with over 70k downloads
        </Content>
        <div className={'skills'}>
          <Tag label={'React'} />
          <Tag label={'Redux'} />
          <Tag label={'Styled Components'} />
          <Tag label={'Capacitor JS'} />
          <Tag label={'Ionic'} />
          <Tag label={'HTML'} />
          <Tag label={'CSS'} />
        </div>
        <NavArrow onClick={() => navigate(appRoutes.td2.nav())} direction={'forward'} />
      </div>

      <Img src={'/icons/td2.png'} />
    </HomeCard>
  );
};

const Img = styled.img`
  padding: 1rem;
  max-width: 100%;
  max-height: 300px;
`;

const Content = styled.div`
  text-align: center;
  text-wrap: pretty;
  font-size: 1.2rem;

  > span {
    white-space: pre;
  }
`;
