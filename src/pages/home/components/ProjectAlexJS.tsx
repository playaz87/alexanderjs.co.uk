import React from 'react';
import { ProjectSection } from './ProjectSection';

export const ProjectAlexJs = (): React.ReactElement => {
  return (
    <ProjectSection
      imgSrc={'/favicon.svg'}
      header={{ title: 'This page!', link: 'https://github.com/playaz87/alexanderjs.co.uk' }}
      content={"I wouldn't be much a frontend developer without my own page would I? Take a look at this page's code on my GitHub!"}
      skills={['React', 'TypeScript', 'Redux', 'Axios', 'Styled Components', 'SASS', 'HTML']}
    />
  );
};
