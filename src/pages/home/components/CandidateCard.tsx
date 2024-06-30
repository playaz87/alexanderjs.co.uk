import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';

export const CandidateCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard onClick={() => navigate(appRoutes.candidate.nav())}>
      <Img src={'/icons/logo_name_light.svg'} />
      <Content>
        <div>
          An innovate Applicant Tracking System that coordinates interviews via Kakao Talk.
          <br />
          <br />
          Built using React, Redux and Styled Components.
          <br />
          <br />
          Data is automatically synced via websockets. A global auth portal for the various services.
        </div>
        <Preview src={'/icons/candidate_preview.png'} alt={'candidate preview'} />
      </Content>
    </HomeCard>
  );
};

const Img = styled.img`
  padding: 1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-wrap: pretty;
`;

const Preview = styled.img`
  border-radius: 4px;
  max-width: 100%;
`;
