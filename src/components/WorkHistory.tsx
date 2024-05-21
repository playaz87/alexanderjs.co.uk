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
      'Socket IO'
    ],
    summary: [
      'Managed team of 3 junior engineers on projects in SasS field.',
      'Efficiently managed software deployments by implementing automated processes that minimized disruption to end users while ensuring successful release launches.',
      'Championed the adoption of modern development tools and frameworks that resulted in increased productivity across the team.',
      'Updated old code bases to modern development standards, improving functionality.',
      'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.',
      'Documented technical workflows and knowledge to educate newly hired employees.',
      'Developed browser-based software and hybrid mobile application'
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
      'Managed team of 3 junior engineers on projects in SasS field.',
      'Efficiently managed software deployments by implementing automated processes that minimized disruption to end users while ensuring successful release launches.',
      'Championed the adoption of modern development tools and frameworks that resulted in increased productivity across the team.',
      'Updated old code bases to modern development standards, improving functionality.',
      'Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs, and enhancements.',
      'Documented technical workflows and knowledge to educate newly hired employees.',
      'Developed browser-based software and hybrid mobile application'
    ],
    iframeSrc: 'https://tomeofd2.web.app/home'
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
    iframeSrc: 'https://mobile.신바람.com'
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

