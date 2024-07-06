import React from 'react';
import styled, { css } from 'styled-components';
import { SectionCandidate } from '../../resume/components/SectionCandidate';
import { SectionShinBaram } from '../../resume/components/SectionShinBaram';
import { SectionHauspital } from './SectionHauspital';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { ProjectTd2 } from './ProjectTD2';
import { useScrollToSection } from '../../../common/hooks/useScrollToSection';
import { ProjectPokeApi } from './ProjectPokeApi';

export const HomeContent = (): React.ReactElement => {
  const { ref, visible } = useScrollToSection<HTMLUListElement>();

  return (
    <Container>
      <Header>
        <h1>Alex Sommerville</h1>
        <h2>Frontend Engineer</h2>
        <p>I build pixel-perfect, engaging, and accessible digital experiences.</p>

        <Nav>
          <Ul ref={ref}>
            <Li $active={visible === 'about'}>
              <span />
              <a href={'#about'}>About</a>
            </Li>
            <Li $active={visible === 'experience'}>
              <span />
              <a href={'#experience'}>Experience</a>
            </Li>
            <Li $active={visible === 'projects'}>
              <span />
              <a href={'#projects'}>Projects</a>
            </Li>
          </Ul>
        </Nav>
      </Header>

      <Main>
        <Section id={'about'}>
          <p>
            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding
            and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a
            start-up, a huge corporation, and a digital product studio. My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look
            good but are also built well under the hood. In my free time, I've also released an online video course that covers everything
            you need to know to build a web app with the Spotify API. When I’m not at the computer, I’m usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
          </p>
        </Section>

        <Section id={'experience'}>
          <SectionCandidate />
          <SectionShinBaram />
          <SectionHauspital />

          <LinkWrap to={appRoutes.resume.path}>View my full {navigator.language.includes('GB') ? 'CV' : 'résumé'}</LinkWrap>
        </Section>

        <Section id={'projects'}>
          <ProjectTd2 />
          <ProjectPokeApi />
        </Section>
      </Main>
    </Container>
  );
};

const Container = styled.div`
  --_gap: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Part = styled.div`
  width: 100%;
  max-width: 500px;
  padding-block: 3rem;

  @media (min-width: 768px) {
    width: calc(50% - calc(var(--_gap) / 2));
  }
`;

const Header = styled(Part)`
  position: sticky;
  top: 0;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--accent);
  z-index: 10;
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const Li = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  > a {
    color: var(--mono-60);
  }

  > span {
    width: 1.5rem;
    height: 1px;
    background-color: var(--mono-60);
    transition: width 0.2s;
  }

  ${({ $active }) =>
    !$active &&
    css`
      &:hover {
        > a {
          color: white;
        }

        > span {
          width: 2rem;
          background-color: white;
        }
      }
    `}

  ${({ $active }) =>
    $active &&
    css`
      > a {
        color: var(--text-accent);
      }

      > span {
        width: 3rem;
        background-color: var(--text-accent);
      }
    `}
`;

const Main = styled(Part)`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LinkWrap = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  margin-top: 1rem;

  &:after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    mask: url('/icons/link.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: white;
  }
`;
