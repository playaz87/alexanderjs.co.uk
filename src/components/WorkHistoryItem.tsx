import React from 'react';
import styled from "styled-components";
import {Section} from "./shared.ts";
import {DissolveOverlay} from "./DissolveOverlay.tsx";

export interface WorkItem {
  id: number;
  title: {role: string; company: string | React.ReactNode};
  date: string;
  stack: (string | React.ReactNode)[];
  summary: {hero: string | React.ReactNode, detail: string | React.ReactNode}[];
  links?: string[];
  iframeSrc?: string;
}

export const WorkHistoryItem: React.FC<WorkItem> = (item) => {
  return (
        <WorkSection $hasIframe={!!item.iframeSrc} >
          <Title>{item.title.role} - <em>{item.title.company}</em></Title>

          <Stack>
            <div>{item.date}</div>
            {item.stack.map(s =>
              <div key={`stack-${item.id}-${s}`}>{s}</div>
            )}
          </Stack>

          <Summary>
            {item.summary.map(s =>
              <li key={`summary-${item.id}-${s.hero}`}><b>{s.hero}</b>{s.detail}</li>
            )}
          </Summary>

          {item.iframeSrc &&
              <Phone>
                  <IframeWrap>
                      <DissolveOverlay cols={10} rows={30} hint={'Click me'} />
                      <Iframe src={item.iframeSrc} />
                  </IframeWrap>
              </Phone>
          }

        </WorkSection>
  );
};

const WorkSection = styled(Section)<{$hasIframe: boolean}>`
    display: grid;
    grid-template-columns: minmax(200px, 364px) minmax(630px, 1fr) ${props => props.$hasIframe ? '370px' : 0};
    grid-template-areas: 'title title title' 'stack summary phone' 'stack summary phone';
    align-items: center;
    justify-items: center;
    
    @container content-right (width < 1295px) {
        grid-template-columns: 2fr ${props => props.$hasIframe ? '1fr' : 0};
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

const Phone = styled.div`
    width: 100%;
    max-width: 500px;
    height: 100%;
    min-height: 710px;
    border-left: 12px solid black;
    border-right: 12px solid black;
    border-top: 40px solid black;
    border-bottom: 70px solid black;
    border-radius: 30px;
    position: relative;
    grid-area: phone;

    &:before, &:after {
        content: '';
        background-color: #9f9f9f;
        display: block;
        position: absolute;
    }

    &:before {
        width: 30%;
        height: 6px;
        border-radius: 10000px;
        left: 50%;
        top: 0;
        transform: translateX(-50%) translateY(-23px);
    }

    &:after {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%) translateY(55px);
    }
    
    @media print {
        display: none;
    }
`
const IframeWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: none;
`