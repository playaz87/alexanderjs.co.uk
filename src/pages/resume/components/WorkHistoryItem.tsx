import React from 'react';
import styled from 'styled-components';
import { Section } from './shared';
import { PhoneFrame } from '../../../common/components/PhoneFrame';

export interface WorkItem {
  id: number;
  title: { role: string; company: string | React.ReactNode };
  date: string;
  stack: (string | React.ReactNode)[];
  summary: { hero: string | React.ReactNode; detail: string | React.ReactNode }[];
  links?: string[];
  iframeSrc?: string;
}

export const WorkHistoryItem: React.FC<WorkItem> = item => {
  return (
    <WorkSection $hasIframe={!!item.iframeSrc}>
      <Title>
        {item.title.role} - <em>{item.title.company}</em>
      </Title>

      <Stack>
        <div>{item.date}</div>
        {item.stack.map(s => (
          <div key={`stack-${item.id}-${s}`}>{s}</div>
        ))}
      </Stack>

      <Summary>
        {item.summary.map(s => (
          <li key={`summary-${item.id}-${s.hero}`}>
            <b>{s.hero}</b>
            {s.detail}
          </li>
        ))}
      </Summary>

      {item.iframeSrc && <PhoneFrame src={item.iframeSrc} />}
    </WorkSection>
  );
};

//@formatter:off
const WorkSection = styled(Section)<{ $hasIframe: boolean }>`
  display: grid;
  grid-template-columns: minmax(200px, 364px) minmax(630px, 1fr) ${props => (props.$hasIframe ? '370px' : 0)};
  grid-template-areas: 'title title title' 'stack summary phone' 'stack summary phone';
  align-items: center;
  justify-items: center;

  @container content-right (width < 1295px) {
    grid-template-columns: 2fr ${props => (props.$hasIframe ? '1fr' : 0)};
    grid-template-areas: 'title phone' 'stack phone' 'summary phone';
  }
  @container content-right (width < 900px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'stack' 'summary' 'phone';
  }

  &:nth-of-type(even) {
    background-color: #fbfcff;
  }

  @media print {
    background-color: white !important;
  }
`;

const Title = styled.h3`
  grid-area: title;
  align-self: flex-end;
  justify-self: center;
  max-width: max-content;
  display: flex;
  align-items: center;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  color: var(--accent);
  text-align: center;
  grid-area: stack;
  font-size: 1.1rem;

  > div:first-of-type {
    margin-bottom: 1rem;
    color: black;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

const Summary = styled.ul`
  grid-area: summary;

  > li {
    line-height: 175%;
  }
`;
