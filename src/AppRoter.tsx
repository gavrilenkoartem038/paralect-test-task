import { Route, Routes } from 'react-router-dom';
import Layout from './app/components/Layout/Layout';
import Main from './app/pages/Main/Main';
import FavoritesPage from './app/pages/FavoritesPage/FavoritesPage';
import VacancyPage from './app/pages/VacancyPage/VacancyPage';
import NotFoundPage from './app/pages/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="favorites" element={<FavoritesPage />} />
        <Route path="/vacancies/:id" element={<VacancyPage />} />
        <Route path="/empty" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
