import { useState, useContext } from 'react';

import {
  Button,
  Input,
  ResponsiveImage,
  MiniCard,
  MiniCardGrid,
  PokemonName,
  SearchContainer,
} from './components';
import { Pokemon } from './types';
import { EnvironmentContext } from './EnvironmentContext';

export async function searchLoader(search?: string) {
  const res = await fetch('http://localhost:3333/api');
  const pokemon = (await res.json()) as Pokemon[];

  return {
    props: {
      pokemon: pokemon
        .filter(({ name }) =>
          name.toLowerCase().includes(search?.toLowerCase() ?? '')
        )
        .slice(0, 20),
    },
  };
}

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => {
  const { Link } = useContext(EnvironmentContext);

  return (
    <MiniCard>
      <ResponsiveImage
        src={`http://localhost:3333/assets/${pokemon.name.toLowerCase()}.jpg`}
        alt={pokemon.name}
        style={{
          width: '100%',
          flexGrow: 1,
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <Link href={`/pokemon/${pokemon.id}`}>
        <PokemonName>{pokemon.name}</PokemonName>
      </Link>
    </MiniCard>
  );
};

export function Search({
  pokemon,
  onSearch,
  initialSearch,
}: {
  pokemon: Pokemon[];
  onSearch?: (search: string) => void;
  initialSearch?: string;
}) {
  const [search, setSearch] = useState(initialSearch ?? '');

  const onDoSearch = () => {
    onSearch?.(search);
  };

  return (
    <div>
      <SearchContainer>
        <Input
          placeholder="Search for a Pokemon"
          style={{ flex: 0.7 }}
          value={search}
          onChange={(evt) => setSearch(evt.target.value)}
          onKeyUp={(evt) => {
            if (evt.key === 'Enter') {
              onDoSearch();
            }
          }}
        />
        <Button style={{ flex: 0.2 }} onClick={onDoSearch}>
          Search
        </Button>
      </SearchContainer>
      <MiniCardGrid>
        {pokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </MiniCardGrid>
    </div>
  );
}
