import React from 'react';
import { WorkSection } from './WorkSection';

export const SectionCandidate = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2022'}
      to={'present'}
      header={{ title: 'Lead Frontend Developer', company: 'Candidate', link: 'https://candidate.im' }}
      content={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum cumque deserunt dolorum eum id illo, illum iste iusto libero magni nemo perferendis! Aut culpa cupiditate eius natus nihil porro, quidem recusandae sed. Accusamus accusantium aliquam, architecto eos eveniet excepturi minima nam, optio, porro quod tempore totam voluptas voluptate.'
      }
      skills={['React', 'Redux', 'Styled Components', 'SASS', 'HTML', 'Socket IO']}
    />
  );
};
