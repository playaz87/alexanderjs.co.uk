import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { Tag } from '../../../common/components/Tag';
import { NavArrow } from '../../../common/components/NavArrow';

export const ResumeCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard>
      <div>
        <div className={'header'}>Resume</div>
        <div>Frontend Developer with 5 years experience</div>

        <div className={'skills'}>
          <Tag label={'React'} />
          <Tag label={'TypeScript'} />
          <Tag label={'JavaScript'} />
          <Tag label={'HTML'} />
          <Tag label={'CSS'} />
          <Tag label={'Redux'} />
        </div>

        <NavArrow onClick={() => navigate(appRoutes.resume.nav())} direction={'forward'} />
      </div>

      <Img src={'/icons/resume.png'} alt='Resume' />
    </HomeCard>
  );
};

const Img = styled.img`
  max-width: 45%;
  border-radius: 4px;
  padding: 0.5rem;
`;
