import React from 'react';
import styled, {css} from "styled-components";
import {SkillPoints} from "./SkillPoints.tsx";

export interface Skill {
  label: string;
  points: number
}

const skills: Skill[] = [
  {label: 'React', points: 5},
  {label: 'Redux Toolkit', points: 5},
  {label: 'CSS/SASS', points: 5},
  {label: 'TypeScript', points: 5},
  {label: 'Styled Components', points: 5},
  {label: 'Capacitor JS', points: 5},
  {label: 'Ionic', points: 5},
  {label: 'GraphQL', points: 4},
  {label: 'Git', points: 4},
  {label: 'Angular', points: 3.5},
  {label: 'MySQL / SQLite', points: 3.5},
  {label: 'Android Native', points: 3},
  {label: 'Unix Systems', points: 3},
  {label: 'Java', points: 4},
  {label: 'Socket.IO', points: 4},
  {label: 'NextJS', points: 3.5}
  // {label: '', points: 4},
  // {label: '', points: 4},
];

export const Skills: React.FC = () => {
  return (
    <>
      {skills.sort((s1, s2) => s2.points - s1.points).map(s =>
        <SkillItem key={s.label}>
          <div>{s.label}</div>
          <SkillPoints skill={s} />
        </SkillItem>
      )}
    </>
  );
};

const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    &:not(:last-of-type) {
        margin-bottom: 0.4rem;
    }
`;

