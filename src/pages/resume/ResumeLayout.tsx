import React from 'react';
import styled from 'styled-components';
import { Section } from './components/shared';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorkHistory } from './components/WorkHistory';
import { TomeOfD2 } from './components/TomeOfD2';

const ResumeLayout = (): React.ReactElement => {
  return (
    <>
      <Header>
        <h1>Alex Sommerville</h1>
        <h2>Frontend Engineer</h2>
      </Header>
      <Content>
        <ContentLeft>
          <Section>
            <h3>About</h3>
            <About />
          </Section>
          <Section>
            <h3>Skills</h3>
            <Skills />
          </Section>
        </ContentLeft>

        <ContentRight>
          <Section>
            <h3>Introduction</h3>
            <IntroUL>
              <li>
                Experienced Frontend React Developer with 5 years of expertise in creating, maintaining, and deploying high-quality React
                applications
              </li>
              <li>I create pixel-perfect, responsive applications from design files such as Figma</li>
              <li>
                Successfully delivered several projects from conception to deployment, ensuring robust performance and user-friendly
                interfaces.
              </li>
              <li>Proficient in developing hybrid mobile apps using React and CapacitorJS</li>
              <li>
                I&apos;m Passionate about frontend development, I dedicate my free time to learning and experimenting with new technologies
                and features, constantly striving to enhance my skills and stay current with industry trends.
              </li>
            </IntroUL>
          </Section>
          <Section>
            <h3>Work History</h3>
            <WorkHistory />
          </Section>
          <Section>
            <h3>Personal Projects</h3>
            <TomeOfD2 />
          </Section>
        </ContentRight>
      </Content>
    </>
  );
};

export default ResumeLayout;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
  background-color: var(--accent);
  color: white;
  padding: 1em;
  font-size: 2.4rem;

  > h1 {
    font-size: 1em;
  }

  > h2 {
    font-size: 0.8em;
    font-weight: 400;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  background-color: white;
  color: var(--accent);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const ContentLeft = styled.div`
  background-color: var(--bg-1);
`;

const ContentRight = styled.div`
  //background-color: #f4f4f4;
  container-type: inline-size;
  container-name: content-right;
`;

const IntroUL = styled.ul`
  padding: 0.4rem 1rem;

  > li {
    line-height: 160%;
    font-size: 1.1rem;
    text-wrap: pretty;
  }

  > li:not(:last-of-type) {
    margin-bottom: 0.2rem;
  }
`;
