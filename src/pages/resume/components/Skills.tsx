import React from 'react';
import styled from 'styled-components';
import { SkillIndicator } from './SkillIndicator';

export interface Skill {
  label: string;
  points: number;
}

const skills: Skill[] = [
  { label: 'React', points: 100 },
  { label: 'Redux Toolkit', points: 100 },
  { label: 'CSS/SASS', points: 100 },
  { label: 'TypeScript', points: 100 },
  { label: 'Styled Components', points: 100 },
  { label: 'Capacitor JS', points: 100 },
  { label: 'Ionic', points: 100 },
  { label: 'GraphQL', points: 85 },
  { label: 'Node', points: 85 },
  { label: 'Unit Testing', points: 85 },
  { label: 'Git', points: 80 },
  { label: 'Angular', points: 65 },
  { label: 'MySQL / SQLite', points: 65 },
  { label: 'Android Native', points: 60 },
  { label: 'Unix Systems', points: 60 },
  { label: 'Java', points: 60 },
  { label: 'Socket.IO', points: 75 },
  { label: 'NextJS', points: 70 },
  { label: 'AWS', points: 65 },
  { label: 'React Native', points: 50 },
  // {label: '', points: 4},
  // {label: '', points: 4},
];

const ATSSkills = [
  'Javascript',
  'Performance Testing',
  'Webpack',
  'Vite',
  'Performance',
  'Front-end',
  'Front-end Developer',
  'Front-end Coding',
  'HTML',
  'User Interface',
  'UX',
  'UI',
  'Implementing UI',
  'Implementing User Interface',
  'React.js',
  'Next',
  'Next.js',
  'Responsive',
  'Responsive Design',
  'Responsive User Interface',
  'Responsive UI',
  'Figma',
  'Capacitor.js',
  'Capacitor',
  'Web Applications',
  'Computer Science',
  'Problem solving',
  'JSON',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Troubleshoot',
  'Debug',
  'Fullstack',
  'Frontend',
  'CI/CD',
  'GitHub',
  'Version Control',
  'JIRA',
  'Lambda',
  'ReactJS',
  'Springboot',
  'React Native',
  'React',
  'TypeScript',
  'Java',
  'CSS',
  'Ionic',
  'AWS',
  'Android',
  'Mobile app',
  'Mobile applications',
  'Hybrid',
  'Hybrid application',
  'Hybrid Development',
  'Xcode',
  'Android Studio',
  'MongoDB',
  'Unit testing',
  'JEST',
  'Cypress',
  'ViteTest',
  'Testing',
  'Backend',
  'Back-end',
  'Web Design',
  'Mobile-friendly',
  'Wep Application',
  'PWA',
  'Firebase',
  'Databases',
  'RxJS',
  'Angular',
  'RESTful',
  'RESTful api',
  'api',
  'GraphQL',
  'Korean',
  'ES6',
  'ES6+',
  'Babel',
  'Context',
  'Context api',
  'Agile',
  'Fast-paced',
  'Startup',
  'Start-up',
  'Start up',
  'UI/UX',
  'JS',
  'TS',
  'REST',
  'Legacy',
  'Node',
  'Node.js',
  'NodeJS',
  'SOLID',
  'Software debugging',
];

export const Skills: React.FC = () => {
  return (
    <Container>
      {skills
        .sort((s1, s2) => s2.points - s1.points)
        .map(s => (
          <SkillItem key={s.label}>
            <div>{s.label}</div>
            <SkillIndicator skill={s} />
            {/*<SkillPoints skill={s} />*/}
          </SkillItem>
        ))}
      <ATSWrapper>
        Key skills:
        {[...skills.map(skill => skill.label), ...ATSSkills].join(', ')}
      </ATSWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
`;

const SkillItem = styled.div`
  --_dot-size: 0.8rem;
  flex: 1 0 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:not(:last-of-type) {
    margin-bottom: 0.4rem;
  }

  @media screen and (max-width: 800px) {
    max-width: 45%;
    --_dot-size: 0.5rem;
  }
`;

const ATSWrapper = styled.div`
  max-width: 100vw;
  position: absolute;
  left: -200vw;
`;
