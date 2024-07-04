import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { Tag } from '../../../common/components/Tag';
import { NavArrow } from '../../../common/components/NavArrow';

export const CandidateCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard>
      <div>
        <div className={'header'}>Candidate</div>
        <div>An innovate Applicant Tracking System that coordinates interviews via Kakao Talk.</div>
        <div className={'skills'}>
          <Tag label={'React'} />
          <Tag label={'TypeScript'} />
          <Tag label={'JavaScript'} />
          <Tag label={'Next'} />
          <Tag label={'Redux'} />
          <Tag label={'Styled Components'} />
          <Tag label={'HTML'} />
          <Tag label={'CSS'} />
          <Tag label={'Socket IO'} />
          <Tag label={'Capacitor JS'} />
          <Tag label={'Floating UI'} />
          <Tag label={'Firebase'} />
          <Tag label={'Android'} />
          <Tag label={'iOS'} />
        </div>
        <NavArrow onClick={() => navigate(appRoutes.candidate.nav())} direction={'forward'} />
      </div>
      <Img src={'/icons/logo_name_light.svg'} />
      {/*<img src={'/icons/candidate_preview.png'} alt={'candidate preview'} />*/}
    </HomeCard>
  );
};

const Img = styled.img`
  padding: 1rem;
`;
