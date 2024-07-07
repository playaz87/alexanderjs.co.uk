import React from 'react';
import { ExternalLink, InternalLink, WorkSection } from '../../resume/components/WorkSection';
import { appRoutes } from '../../../AppRoutes';
import { FlexRow } from '../../../common/components/FlexRow';

export const SectionShinBaram = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2021'}
      to={'2022'}
      header={{ title: 'Lead Frontend Developer', company: 'Shinbaram' }}
      content={'Worked with the backend and UI teams to engineer Shinbarams’s customer-facing secondhand market place Android app.'}
      footer={
        <FlexRow $gap={'1rem'} $justify={'flex-start'}>
          <ExternalLink
            $icon={'android'}
            href={'https://play.google.com/store/apps/details?id=com.uos.project_new_windy&hl=en'}
            target={'_blank'}
            rel={'noreferrer noopener'}
          >
            Android
          </ExternalLink>
          <InternalLink $icon={'pc'} to={appRoutes.shinbaram.nav()}>
            See a demo
          </InternalLink>
        </FlexRow>
      }
      skills={['React', 'TypeScript', 'GraphQL', 'Capacitor JS', 'Ionic', 'Styled Components', 'SASS', 'HTML', 'Firebase']}
    />
  );
};
