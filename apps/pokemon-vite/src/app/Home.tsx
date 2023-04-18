import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Search, searchLoader, Pokemon } from '@portable-react-apps/pokemon-ui';

import EnvironmentProvider from '../lib/EnvironmentProvider';

export default function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const onRunSearch = async (search: string) => {
    setPokemon((await searchLoader(search ?? '')).props.pokemon);
  };

  const [searchParams] = useSearchParams();

  useEffect(() => {
    onRunSearch(searchParams.get('search') ?? '');
  }, [searchParams]);

  const navigate = useNavigate();

  const onSearch = (search: string) => {
    onRunSearch(search);
    navigate(`/?search=${search}`, { replace: true });
  };

  return (
    <EnvironmentProvider>
      <Search
        onSearch={onSearch}
        pokemon={pokemon}
        initialSearch={searchParams.get('search') ?? ''}
      />
    </EnvironmentProvider>
  );
}
