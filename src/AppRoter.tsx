// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Layout from './app/components/Layout/Layout';
import Main from './app/pages/Main/Main';
import FavoritesPage from './app/pages/FavoritesPage/FavoritesPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="/vacancies/:id" element={<div>vacancy</div>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
