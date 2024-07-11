import React from 'react';
import { InternalLink, WorkSection } from '../../resume/components/WorkSection';
import { appRoutes } from '../../../AppRoutes';

export const SectionCandidate = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2022'}
      to={'present'}
      header={{ title: 'Lead Frontend Developer', company: 'Candidate', link: 'https://candidate.im' }}
      content={
        'Built and maintained critical components used to construct Candidate’s frontend, ' +
        'across the whole product stack (web and mobile). Worked closely with cross-functional teams, including developers, ' +
        'designers, and product managers, to implement and advocate for best practices in web UX and development'
      }
      skills={[
        'React',
        'TypeScript',
        'Redux',
        'Styled Components',
        'SASS',
        'Next.js',
        'HTML',
        'Socket IO',
        'Floating UI',
        'Android',
        'iOS',
        'Capacitor JS',
        'Ionic',
      ]}
      footer={
        <InternalLink $icon={'pc'} to={appRoutes.candidate.nav()}>
          See a demo
        </InternalLink>
      }
    />
  );
};
