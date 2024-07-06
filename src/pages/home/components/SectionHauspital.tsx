import React from 'react';
import { WorkSection } from '../../resume/components/WorkSection';

export const SectionHauspital = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2021'}
      to={'2020'}
      header={{ title: 'Fullstack Developer', company: 'Hauspital' }}
      content={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum cumque deserunt dolorum eum id illo, illum iste iusto libero magni nemo perferendis! Aut culpa cupiditate eius natus nihil porro, quidem recusandae sed. Accusamus accusantium aliquam, architecto eos eveniet excepturi minima nam, optio, porro quod tempore totam voluptas voluptate.'
      }
      skills={['React', 'Java', 'Spring Boot', 'MyBatis', 'MySQL', 'WebRTC', 'CSS', 'HTML', 'Firebase']}
    />
  );
};
