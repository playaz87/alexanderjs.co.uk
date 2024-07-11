import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { SectionCandidate } from './SectionCandidate';
import { SectionShinBaram } from './SectionShinBaram';
import { SectionHauspital } from './SectionHauspital';
import { Link } from 'react-router-dom';
import { appRoutes } from '../../../AppRoutes';
import { ProjectTd2 } from './ProjectTD2';
import { useScrollToSection } from '../../../common/hooks/useScrollToSection';
import { ProjectPokeApi } from './ProjectPokeApi';
import { ProjectAlexJs } from './ProjectAlexJS';

export const HomeContent = (): React.ReactElement => {
  const { ref, visible } = useScrollToSection<HTMLUListElement>();
  const [coords, setCoords] = useState<{ x: number; y: number }>();
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    container.current?.addEventListener('mousemove', e => {
      setCoords({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <Container ref={container}>
      <CursorGlow $coords={coords} />
      <Header>
        <div>
          <h1>Alex Sommerville</h1>
          <h2>Frontend Engineer</h2>
        </div>

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
          <h2>About</h2>
          <p>
            Back in 2018 I was playing the game Diablo 2. Unlike modern games, Diablo 2 contains very little in-game information. Online
            resources are numerous but at the time were dispersed across a multitude of different websites. I figured that there must be an
            app that pulled together all of the resources into one place. When I couldn&apos;t find such an app I decided to embark on the
            journey to make one myself. A journey that changed my life.
            <br />
            <br />
            Fast-forward to today, and I’ve built a range of software solutions from the ground up. When I&apos;m not writing code I'm
            learning about it. I enjoy spending my free time learning about the new features and tools that I use in my daily coding life.
            <br />
            <br />
            When I’m not at the computer, I’m usually fishing, reading or hanging out with my wife and dog.
          </p>
        </Section>

        <Section id={'experience'}>
          <h2>Experience</h2>
          <SectionCandidate />
          <SectionShinBaram />
          <SectionHauspital />

          <LinkWrap to={appRoutes.resume.path}>View my full {navigator.language.includes('GB') ? 'CV' : 'résumé'}</LinkWrap>
        </Section>

        <Section id={'projects'}>
          <h2>Projects</h2>
          <ProjectTd2 />
          <ProjectPokeApi />
          <ProjectAlexJs />
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
  margin-top: var(--_header-height);

  a {
    color: white;
    text-decoration: none;
  }

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CursorGlow = styled.div.attrs<{ $coords?: { x: number; y: number } }>(props => ({
  style: {
    background: props.$coords
      ? `radial-gradient(600px at ${props.$coords.x}px ${props.$coords.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      : undefined,
  },
}))<{ $coords?: { x: number; y: number } }>`
  position: fixed;
  inset: 0;
  display: ${({ $coords }) => ($coords ? 'block' : 'none')};
  pointer-events: none;
  z-index: 100;
`;

const Part = styled.div`
  width: 100%;
  max-width: 500px;
  padding-block: 3rem;
  flex-grow: 1;
  min-width: min(100%, 450px);

  //@media (min-width: 820px) {
  //  width: calc(50% - calc(var(--_gap) / 2));
  //}

  @media (max-width: 520px) {
    padding-block: 1.5rem;
  }

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: center;
    max-width: 100%;
    padding-block: 2rem;
  }
`;

const Header = styled(Part)`
  position: sticky;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: var(--bg-2);
  z-index: 10;
  font-size: 1.5rem;
  top: var(--_header-height);

  h1 {
    font-size: 2em;
  }

  h2 {
    font-size: 1.2em;
  }

  > p {
    font-size: 1em;
  }

  @media (max-width: 520px) {
    gap: 1.5rem;
    font-size: 1rem;
    top: -6rem;
  }
  @media (max-width: 1130px) {
    align-items: flex-start;
    top: -13rem;
  }
`;

const Nav = styled.nav`
  //position: sticky;
  //top: var(--_header-height);
  //z-index: 11;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0;

  @media (max-width: 820px) {
    flex-direction: row;
  }
`;

const Li = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  font-size: 0.8em;

  > a {
    color: var(--mono-60);
  }

  > span {
    width: 1.5em;
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
          width: 2em;
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
        width: 3em;
        background-color: var(--text-accent);
      }
    `}
`;

const Main = styled(Part)`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  > p {
    color: var(--mono-60);
  }

  > h2 {
    display: none;
  }

  @media (max-width: 1130px) {
    > h2 {
      display: block;
    }
  }
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
