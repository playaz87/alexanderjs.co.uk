import React from 'react';
import { HomeCard } from '../HomeLayout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';

export const ResumeCard = (): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <HomeCard onClick={() => navigate(appRoutes.resume.nav())}>
      <Header>Resume</Header>
      <Content>React Developer with 5 years experience</Content>
    </HomeCard>
  );
};

const Header = styled.div`
  font-size: 2rem;
  border-bottom: 1px solid white;
`;

const Content = styled.div`
  padding: 0.5rem;
`;
