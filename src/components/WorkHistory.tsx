import React from 'react';
import styled from "styled-components";
import {Section} from "./shared.ts";
import {DissolveOverlay} from "./DissolveOverlay.tsx";

export const WorkHistory: React.FC = () => {
  return (
    <>
      <WorkSection>
        <Title>Lead Frontend Developer - <em>Candidate Inc.</em></Title>

        <Stack>
          <div>2022.03 ~ Current</div>
          <div>React 18</div>
          <div>Redux Toolkit</div>
          <div>Styled Components</div>
          <div>Axios</div>
          <div>Socket.IO</div>
        </Stack>

        <Ul>
          <li>Managed team of 3 junior engineers on projects
            in SasS field.
          </li>
          <li>Efficiently managed software deployments by
            implementing automated processes that minimized disruption to end users while ensuring
            successful release launches.
          </li>

          <li>Championed the adoption of modern
            development tools and frameworks that resulted
            in increased productivity across the team.
          </li>
          <li>Updated old code bases to modern
            development standards, improving functionality.
          </li>
          <li>Contributed ideas and suggestions in team
            meetings and delivered updates on deadlines,
            designs, and enhancements.
          </li>
          <li>Documented technical workflows and
            knowledge to educate newly hired employees.
          </li>
          <li>Developed browser-based software and hybrid
            mobile application
          </li>
        </Ul>

        <Phone>
          <IframeWrap>
            <DissolveOverlay cols={10} rows={30} hint={'Click me'} />
            <Iframe src="https://tomeofd2.web.app/home" frameBorder="0"></Iframe>
          </IframeWrap>
        </Phone>

      </WorkSection>

      <WorkSection>
        <Title>Hybrid React App Developer - <em>Shinbaram</em></Title>

        <Stack>
          <div>2021.10 ~ 2022.03</div>
          <div>React 18</div>
          <div>Ionic 6</div>
          <div>Capacitor JS</div>
          <div>GraphQL</div>
          <div>CSS Modules</div>
          <div>Firebase Cloud Messaging</div>
        </Stack>

        <Ul>
          <li>Managed team of 3 junior engineers on projects
            in SasS field.</li>
          <li>Efficiently managed software deployments by
            implementing automated processes that minimized disruption to end users while ensuring
            successful release launches.</li>

          <li>Championed the adoption of modern
            development tools and frameworks that resulted
            in increased productivity across the team.</li>
          <li>Updated old code bases to modern
            development standards, improving functionality.</li>
          <li>Contributed ideas and suggestions in team
            meetings and delivered updates on deadlines,
            designs, and enhancements.</li>
          <li>Documented technical workflows and
            knowledge to educate newly hired employees.</li>
          <li>Developed browser-based software and hybrid
            mobile application</li>
        </Ul>

        <Phone>
          <IframeWrap>
            <DissolveOverlay cols={10} rows={30} hint={'Click me'} />
            <Iframe src="https://mobile.신바람.com" frameBorder="0"></Iframe>
          </IframeWrap>
        </Phone>

      </WorkSection>

      <WorkSection>
        <Title>Fullstack Developer - <em>Hauspital</em></Title>

        <Stack>
          <div>2021.01 ~ 2021.08</div>
          <div>React 18</div>
          <div>Java</div>
          <div>Spring Boot</div>
          <div>Mybatis</div>
          <div>MySQL</div>
          <div>WebRTC</div>
        </Stack>

        <Ul>
          <li>Managed team of 3 junior engineers on projects
            in SasS field.</li>
          <li>Efficiently managed software deployments by
            implementing automated processes that minimized disruption to end users while ensuring
            successful release launches.</li>

          <li>Championed the adoption of modern
            development tools and frameworks that resulted
            in increased productivity across the team.</li>
          <li>Updated old code bases to modern
            development standards, improving functionality.</li>
          <li>Contributed ideas and suggestions in team
            meetings and delivered updates on deadlines,
            designs, and enhancements.</li>
          <li>Documented technical workflows and
            knowledge to educate newly hired employees.</li>
          <li>Developed browser-based software and hybrid
            mobile application</li>
        </Ul>
      </WorkSection>
    </>
  );
};

const WorkSection = styled(Section)`
    display: grid;
    grid-template-columns: minmax(200px, 364px) minmax(630px, 1fr) 370px;
    grid-template-areas: 'title title title' 'stack summary phone' 'stack summary phone';
    align-items: center;
    justify-items: center;
    
    @container content-right (width < 1295px) {
        grid-template-columns: 2fr 1fr;
        grid-template-areas: 'title phone' 'stack phone' 'summary phone';
        grid-template-rows: 100px auto auto auto;
    }
    
    @container content-right (width < 900px) {
        grid-template-columns: 1fr;
        grid-template-areas: 'title' 'stack' 'summary' 'phone';
    }
`;

const Title = styled.h3`
    grid-area: title;
    align-self: flex-end;
    justify-self: center;
    max-width: max-content;
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

const Ul = styled.ul`
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
`