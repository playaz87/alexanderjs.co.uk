import React from 'react';
import { WorkSection } from '../../resume/components/WorkSection';

export const SectionHauspital = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2021'}
      to={'2020'}
      header={{ title: 'Fullstack Developer', company: 'Hauspital' }}
      content={
        'Collaborated with the design and development teams to create a remote consultation solution ' +
        'for doctors and patients during the COVID-19 pandemic'
      }
      skills={['React', 'Java', 'Spring Boot', 'MyBatis', 'MySQL', 'WebRTC', 'CSS', 'HTML', 'Firebase']}
    />
  );
};
