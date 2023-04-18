import { useRouter } from 'next/router';

import { Search, searchLoader } from '@portable-react-apps/pokemon-ui';

import EnvironmentProvider from '../lib/EnvironmentProvider';

export async function getServerSideProps(req) {
  return await searchLoader(req.query.search?.toLowerCase() ?? '');
}

export function Index({ pokemon }) {
  const router = useRouter();

  const onSearch = (search: string) => {
    router.push({
      pathname: '/',
      query: { search },
    });
  };

  return (
    <EnvironmentProvider>
      <Search
        onSearch={onSearch}
        pokemon={pokemon}
        initialSearch={(router.query.search as string) ?? ''}
      />
    </EnvironmentProvider>
  );
}

export default Index;
