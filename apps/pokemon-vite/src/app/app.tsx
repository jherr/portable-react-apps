import { Route, Routes, Link } from 'react-router-dom';

import { Main } from '@portable-react-apps/pokemon-ui';

import Home from './Home';
import Detail from './Detail';

import '../styles/global.css';

export function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Detail />} />
      </Routes>
    </Main>
  );
}

export default App;
