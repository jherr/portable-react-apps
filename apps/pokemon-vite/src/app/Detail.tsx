import { useEffect, useState } from 'react';
import {
  PokemonDetail,
  detailLoader,
  Pokemon,
} from '@portable-react-apps/pokemon-ui';
import { useParams } from 'react-router-dom';

import EnvironmentProvider from '../lib/EnvironmentProvider';

const PokemonDetailPage = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const params = useParams();
  useEffect(() => {
    (async () => {
      setPokemon((await detailLoader(Number(params.id))).props.pokemon);
    })();
  }, [params.id]);

  if (!pokemon) {
    return null;
  }

  return (
    <EnvironmentProvider>
      <PokemonDetail pokemon={pokemon} />
    </EnvironmentProvider>
  );
};

export default PokemonDetailPage;
