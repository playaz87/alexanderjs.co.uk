import React from 'react';
import { ProjectSection } from './ProjectSection';
import { appRoutes } from '../../../AppRoutes';
import { StoreLink } from '../../resume/components/WorkSection';
import { FlexRow } from '../../../common/components/FlexRow';
import { FlexCol } from '../../../common/components/FlexCol';
import styled from 'styled-components';

export const ProjectTd2 = (): React.ReactElement => {
  return (
    <ProjectSection
      imgSrc={'/icons/td2.png'}
      header={{ title: 'Tome of D2', link: appRoutes.td2.nav() }}
      content={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum cumque deserunt dolorum eum id illo, illum iste iusto libero magni nemo perferendis! Aut culpa cupiditate eius natus nihil porro, quidem recusandae sed. Accusamus accusantium aliquam, architecto eos eveniet excepturi minima nam, optio, porro quod tempore totam voluptas voluptate.'
      }
      skills={['React', 'SQLite', 'Capacitor JS', 'Ionic', 'Styled Components', 'SASS', 'HTML']}
      footer={
        <FlexCol $justify={'flex-start'} $align={'flex-start'} $gap={'1.5rem'}>
          <FlexRow $gap={'2rem'}>
            <InfoIcon $count={'4.1'} $iconName={'star'} />
            <InfoIcon $count={'70k+'} $iconName={'download'} />
          </FlexRow>
          <FlexRow $gap={'1rem'}>
            <StoreLink
              $type={'android'}
              href={'https://play.google.com/store/apps/details?id=uk.co.alexanderjs.runewordhelper'}
              target={'_blank'}
              rel={'noreferrer noopener'}
            >
              Android
            </StoreLink>
            <StoreLink
              $type={'ios'}
              href={'https://apps.apple.com/us/app/tome-of-d2/id1446555252'}
              target={'_blank'}
              rel={'noreferrer noopener'}
            >
              iOS
            </StoreLink>
          </FlexRow>
        </FlexCol>
      }
    />
  );
};

const InfoIcon = styled.div<{ $iconName: string; $count: string }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:before {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    mask: url('/icons/${props => props.$iconName}.svg');
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    background-color: white;
  }

  &:after {
    content: '${props => props.$count}';
  }
`;
