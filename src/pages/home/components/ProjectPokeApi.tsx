import React from 'react';
import { ProjectSection } from './ProjectSection';
import { appRoutes } from '../../../AppRoutes';

export const ProjectPokeApi = (): React.ReactElement => {
  return (
    <ProjectSection
      imgSrc={'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi.svg'}
      header={{ title: 'PokéAPI RESTful Demo', link: appRoutes.pokeAPI.nav() }}
      content={'My take on the popular Pokemon API'}
      skills={['React', 'TypeScript', 'Redux', 'Axios', 'Styled Components', 'SASS', 'HTML']}
    />
  );
};
