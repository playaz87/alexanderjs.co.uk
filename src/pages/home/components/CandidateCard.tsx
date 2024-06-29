import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';

export const CandidateCard = (): React.ReactElement => {
  return (
    <HomeCard>
      <Img src={'/icons/logo_name_dark.svg'} />
      <Content>An innovate Applicant Tracking System that coordinates interviews via Kakao Talk</Content>
    </HomeCard>
  );
};

const Img = styled.img`
  border-bottom: 1px solid white;
  padding: 1rem;
`;

const Content = styled.div``;
