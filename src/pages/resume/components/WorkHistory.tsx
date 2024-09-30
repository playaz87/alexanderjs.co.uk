import React from 'react';
import type { WorkItem } from './WorkHistoryItem';
import { WorkHistoryItem } from './WorkHistoryItem';

const history: WorkItem[] = [
  {
    id: 1,
    title: { role: 'Lead Frontend Developer', company: 'Candidate Inc.' },
    date: '2022.03 ~ Current',
    stack: ['React 18', 'Redux Toolkit', 'Styled Components', 'Axios', 'Socket IO', 'Vite'],
    summary: [
      {
        hero: 'Developed and maintained innovative SaaS projects',
        detail:
          ': Created various client-side and server-side React Single Page Applications (SPAs) and React-based hybrid mobile apps, ensuring a seamless user experience across platforms.',
      },
      {
        hero: 'Optimized deployment processes',
        detail: ': Implemented automated deployment strategies that ensured smooth and successful releases.',
      },
      {
        hero: 'Evaluated and integrated development tools',
        detail:
          ': Vetted and selected development tools and packages for customer-facing applications to enhance performance and reliability.',
      },
      {
        hero: 'Contributed to feature planning and updates',
        detail:
          ': Actively participated in feature planning meetings, offering ideas and suggestions, and regularly provided updates on project timelines, design considerations, and feature enhancements.',
      },
      {
        hero: 'Collaborated on backend architecture',
        detail:
          ': Worked closely with the backend development team to make informed decisions regarding server and API architecture, ensuring efficient integration and performance.',
      },
      {
        hero: 'Documented technical workflows',
        detail:
          ': Created comprehensive documentation of technical workflows and processes to facilitate the onboarding and training of new employees, ensuring smooth knowledge transfer and team integration.',
      },
    ],
  },
  {
    id: 2,
    title: {
      role: 'Hybrid App Developer (React)',
      company: (
        <a href={'https://play.google.com/store/apps/details?id=com.uos.project_new_windy'} target={'_blank'} rel={'noreferrer'}>
          Shinbaram
        </a>
      ),
    },
    date: '2021.10 ~ 2022.03',
    stack: ['React 18', 'Ionic 6', 'Capacitor JS', 'GraphQL', 'CSS Modules', 'Firebase Cloud Messaging'],
    summary: [
      {
        hero: 'Developed a hybrid mobile application for the agricultural market',
        detail:
          ': Created a secondhand marketplace app for agricultural products, transforming a basic Figma design into a fully functional application.',
      },
      {
        hero: 'Developed cross-platform solutions',
        detail:
          ': Delivered browser-based software and a hybrid mobile application, ensuring a consistent and efficient user experience across devices.',
      },
      {
        hero: 'Implemented cutting-edge development practices',
        detail: ': Introduced and integrated modern development tools and frameworks, significantly boosting productivity and efficiency.',
      },
      {
        hero: 'Conducted rigorous testing and debugging',
        detail:
          ': Performed extensive testing and debugging to ensure the application was reliable, secure, and performed well under various conditions.',
      },
    ],
    iframeSrc: 'https://mobile.신바람.com',
  },
  {
    id: 3,
    title: { role: 'Fullstack Developer', company: 'Hauspital' },
    date: '2021.01 ~ 2021.08',
    stack: ['React 18', 'Java', 'Spring Boot', 'Mybatis', 'MySQL', 'WebRTC'],
    summary: [
      {
        hero: 'Developed a remote consultation application for doctors',
        detail:
          ': Created a robust client application for doctors to conduct remote consultations with patients, ensuring a seamless and professional user experience.',
      },
      {
        hero: 'Implemented video conferencing features',
        detail:
          ': Integrated WebRTC to enable high-quality, real-time video conferencing, facilitating effective remote consultations between doctors and patients.',
      },
      {
        hero: 'Facilitated cross-functional teamwork',
        detail:
          ": Collaborated effectively with teams working on the patients' mobile application and the backend, ensuring seamless integration and consistent functionality across all platforms.",
      },
      {
        hero: 'Conducted user testing and gathered feedback',
        detail:
          ": Performed thorough user testing and gathered feedback from doctors to continuously improve the application's usability and functionality.",
      },
    ],
  },
];

export const WorkHistory: React.FC = () => {
  return (
    <>
      {history.map(item => (
        <WorkHistoryItem key={`work-item-${item.id}`} {...item} />
      ))}
    </>
  );
};
