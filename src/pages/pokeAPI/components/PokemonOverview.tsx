import React from 'react';
import type { Resource } from '../../../common/types/poke-api/poke-api';
import styled from 'styled-components';
import { extractPokeApiId, leftPadId } from '../../../common/utils/utils';
import { useNavigate } from 'react-router-dom';

interface Props {
  resource: Resource;
}

export const PokemonOverview: React.FC<Props> = ({ resource }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(resource.name)}>
      <Img
        src={`https://pokedex.hybridshivam.com/assets/thumbnails-compressed/${leftPadId(extractPokeApiId(resource.url)!)}.png`}
        alt={resource.name}
      />
      <div>{resource.name}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: var(--accent);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.2rem;
  color: wheat;
  text-transform: capitalize;
  cursor: pointer;
  transition: scale 0.3s;

  &:hover {
    scale: 1.2;
  }
`;
const Img = styled.img`
  width: 90%;
  aspect-ratio: 1 /1;
`;
