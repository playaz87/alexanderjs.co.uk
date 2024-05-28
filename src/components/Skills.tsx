import React from 'react';
import styled from "styled-components";
import { SkillIndicator } from "./SkillIndicator.tsx";

export interface Skill {
  label: string;
  points: number
}

const skills: Skill[] = [
  {label: 'React', points: 100},
  {label: 'Redux Toolkit', points: 100},
  {label: 'CSS/SASS', points: 100},
  {label: 'TypeScript', points: 100},
  {label: 'Styled Components', points: 100},
  {label: 'Capacitor JS', points: 100},
  {label: 'Ionic', points: 100},
  {label: 'GraphQL', points: 85},
  {label: 'Git', points: 80},
  {label: 'Angular', points: 65},
  {label: 'MySQL / SQLite', points: 65},
  {label: 'Android Native', points: 60},
  {label: 'Unix Systems', points: 60},
  {label: 'Java', points: 60},
  {label: 'Socket.IO', points: 75},
  {label: 'NextJS', points: 70},
  {label: 'AWS', points: 65},
  {label: 'React Native', points: 50},
  // {label: '', points: 4},
  // {label: '', points: 4},
];

export const Skills: React.FC = () => {
  return (
    <Container>
      {skills.sort((s1, s2) => s2.points - s1.points).map(s =>
        <SkillItem key={s.label}>
          <div>{s.label}</div>
          <SkillIndicator skill={s} />
          {/*<SkillPoints skill={s} />*/}
        </SkillItem>
      )}
    </Container>
  );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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

