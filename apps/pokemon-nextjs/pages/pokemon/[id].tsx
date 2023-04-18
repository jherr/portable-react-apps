import {
  PokemonDetail,
  detailLoader,
  Pokemon,
} from '@portable-react-apps/pokemon-ui';

import EnvironmentProvider from '../../lib/EnvironmentProvider';

export async function getServerSideProps(req) {
  return detailLoader(req.params.id);
}

const PokemonDetailPage = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <EnvironmentProvider>
      <PokemonDetail pokemon={pokemon} />
    </EnvironmentProvider>
  );
};

export default PokemonDetailPage;
