import { useContext } from 'react';
import {
  ResponsiveImage,
  BackButton,
  DetailContainer,
  DetailImageContainer,
  DetailInfoContainer,
  InfoGrid,
  InfoItem,
  InfoValue,
} from './components';
import { Pokemon } from './types';
import { EnvironmentContext } from './EnvironmentContext';

export async function detailLoader(id: number) {
  const res = await fetch(`http://localhost:3333/api/${id}`);
  const pokemon = (await res.json()) as Pokemon;

  return {
    props: {
      pokemon: pokemon,
    },
  };
}

export const PokemonDetail = ({ pokemon }: { pokemon: Pokemon }) => {
  const { Link } = useContext(EnvironmentContext);

  return (
    <div>
      <Link href="/">
        <BackButton>&lt;&lt; Back</BackButton>
      </Link>
      <DetailContainer>
        <DetailImageContainer>
          <ResponsiveImage
            src={`http://localhost:3333/assets/${pokemon.name.toLowerCase()}.jpg`}
            style={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              height: '100%',
            }}
          />
        </DetailImageContainer>
        <DetailInfoContainer>
          <h1>{pokemon.name}</h1>
          <InfoGrid>
            <InfoItem>Attack</InfoItem>
            <InfoValue>{pokemon.attack}</InfoValue>
            <InfoItem>Defense</InfoItem>
            <InfoValue>{pokemon.defense}</InfoValue>
            <InfoItem>Speed</InfoItem>
            <InfoValue>{pokemon.speed}</InfoValue>
            <InfoItem>HP</InfoItem>
            <InfoValue>{pokemon.hp}</InfoValue>
            <InfoItem>Special Attack</InfoItem>
            <InfoValue>{pokemon.special_attack}</InfoValue>
            <InfoItem>Special Defense</InfoItem>
            <InfoValue>{pokemon.special_defense}</InfoValue>
          </InfoGrid>
        </DetailInfoContainer>
      </DetailContainer>
    </div>
  );
};
