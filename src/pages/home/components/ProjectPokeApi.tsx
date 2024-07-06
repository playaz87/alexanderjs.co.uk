import React from 'react';
import { ProjectSection } from './ProjectSection';
import { appRoutes } from '../../../AppRoutes';

export const ProjectPokeApi = (): React.ReactElement => {
  return (
    <ProjectSection
      imgSrc={'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg'}
      header={{ title: 'PokeAPI RESTful Demo', link: appRoutes.pokeAPI.nav() }}
      content={
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto cum cumque deserunt dolorum eum id illo, illum iste iusto libero magni nemo perferendis! Aut culpa cupiditate eius natus nihil porro, quidem recusandae sed. Accusamus accusantium aliquam, architecto eos eveniet excepturi minima nam, optio, porro quod tempore totam voluptas voluptate.'
      }
      skills={['React', 'Redux', 'Axios', 'Styled Components', 'SASS', 'HTML']}
    />
  );
};
