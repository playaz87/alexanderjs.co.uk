import styled, {css} from "styled-components";

import React, {useMemo} from 'react';
import type {Skill} from "./Skills.tsx";

interface Props {
  skill: Skill;
}

export const SkillPoints: React.FC<Props> = ({skill}) => {

  const vals = useMemo(() => {
    let vals: PointTypes[] = [];
    for (let i = 1; i < 6; i++) {
      if (i <= skill.points) {
        vals.push('full');
      }
      if (i === skill.points + 0.5) {
        vals.push('half');
      }
      else if (i > skill.points) {
        vals.push('empty');
      }
    }
    return vals;
  }, [skill])

  return (
    <Container>
      {vals.map((v, i) => <Point key={`${skill.label}-${i}`} $type={v} />)}
    </Container>
  );
};

type PointTypes = 'empty' | 'half' | 'full';

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-left: auto;
`;

const Point = styled.div<{$type: PointTypes}>`
    width: var(--_dot-size);
    height: var(--_dot-size);
    border-radius: 50%;
    overflow: hidden;
    
    &:before, &:after {
        content: '';
        width: var(--_dot-size);
        height: var(--_dot-size);
        flex-shrink: 0;
        border-radius: 50%;
    }
    
    ${({$type}) => ($type === 'empty' || $type === 'half') && css`
        &:before {
            border: 1px solid var(--accent);
            display: block;
        }
    `}
    
    ${({$type}) => $type === 'half' && css`
        &:after {
            border-radius: 0;
            background-color: var(--accent);
            transform: translateX(-50%) translateY(-100%);
            display: block;
        }
    `}
    
    ${({$type}) => $type === 'full' && css`
        &:before {
            background-color: var(--accent);
            display: block;
        }
    `}
`;