import React from 'react';
import type {WorkItem} from "./WorkHistoryItem.tsx";
import {WorkHistoryItem} from "./WorkHistoryItem.tsx";

const history: WorkItem[] = [
  {
    id: 1,
    title: {role: 'Lead Frontend Developer', company: 'Candidate Inc.'},
    date: '2022.03 ~ Current',
    stack: [
      'React 18',
      'Redux Toolkit',
      'Styled Components',
      'Axios',
      'Socket IO',
      'Vite'
    ],
    summary: [
      'Created various new projects including client-side React SPAs, server-side React SPAs, and React-based hybrid apps',
      'Managed team of 3 junior engineers on projects in SaaS field.',
      'Efficiently managed software deployments by implementing automated processes that minimized disruption to end users while ensuring successful release launches.',
      'Vetted development tools and packages for use in customer-facing applications',
      'Contributed ideas and suggestions in feature planning meetings and delivered updates on deadlines, designs, and enhancements.',
      'Conferred with backend development team on server and api architecture choices',
      'Documented technical workflows and knowledge to onboard newly hired employees.',
    ]
  },
  {
    id: 2,
    title: {role: 'Hybrid App Developer (React)', company: 'Shinbaram'},
    date: '2021.10 ~ 2022.03',
    stack: [
      'React 18',
      'Ionic 6',
      'Capacitor JS',
      'GraphQL',
      'CSS Modules',
      'Firebase Cloud Messaging'
    ],
    summary: [
      'Created a secondhand agricultural market place hybrid mobile application',
      'Worked alone to make a basic Figma design a reality',
      'Championed the adoption of modern development tools and frameworks that resulted in increased productivity across the team.',
      'Updated old code bases to modern development standards, improving functionality.',
      'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.',
      'Documented technical workflows and knowledge to educate newly hired employees.',
      'Developed browser-based software and hybrid mobile application'
    ],
    iframeSrc: 'https://mobile.신바람.com'
  },
  {
    id: 3,
    title: {role: 'Fullstack Developer', company: 'Hauspital'},
    date: '2021.01 ~ 2021.08',
    stack: [
      'React 18',
      'Java',
      'Spring Boot',
      'Mybatis',
      'MySQL',
      'WebRTC'
    ],
    summary: [
      'Managed team of 3 junior engineers on projects in SasS field.',
      'Efficiently managed software deployments by implementing automated processes that minimized disruption to end users while ensuring successful release launches.',
      'Championed the adoption of modern development tools and frameworks that resulted in increased productivity across the team.',
      'Updated old code bases to modern development standards, improving functionality.',
      'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.',
      'Documented technical workflows and knowledge to educate newly hired employees.',
      'Developed browser-based software and hybrid mobile application'
    ],
  },
]


export const WorkHistory: React.FC = () => {
  return (
    <>
      {
        history.map(item => <WorkHistoryItem key={`work-item-${item.id}`}  {...item} />)
      }
    </>
  );
};

