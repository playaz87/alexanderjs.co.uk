import React from 'react';
import { StoreLink, WorkSection } from './WorkSection';

export const SectionShinBaram = (): React.ReactElement => {
  return (
    <WorkSection
      from={'2021'}
      to={'2022'}
      header={{ title: 'Lead Frontend Developer', company: 'Shinbaram', link: 'https://mobile.신바람.com' }}
      content={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum cumque deserunt dolorum eum id illo, illum iste iusto libero magni nemo perferendis! Aut culpa cupiditate eius natus nihil porro, quidem recusandae sed. Accusamus accusantium aliquam, architecto eos eveniet excepturi minima nam, optio, porro quod tempore totam voluptas voluptate.'
      }
      footer={
        <StoreLink
          $type={'android'}
          href={'https://play.google.com/store/apps/details?id=com.uos.project_new_windy&hl=en'}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          Android
        </StoreLink>
      }
      skills={['React', 'GraphQL', 'Capacitor JS', 'Ionic', 'Styled Components', 'SASS', 'HTML', 'Firebase']}
    />
  );
};
