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
      <Content>
        <div>React Developer with 5 years experience</div>
        <Img src={'/icons/resume.png'} alt='Resume' />
      </Content>
    </HomeCard>
  );
};

const Header = styled.div`
  font-size: 2rem;
  text-align: center;
`;

const Content = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  text-wrap: pretty;
  font-size: 1.2rem;
`;

const Img = styled.img`
  max-width: 45%;
  border-radius: 4px;
`;
