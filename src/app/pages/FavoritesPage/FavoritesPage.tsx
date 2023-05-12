import { Flex } from '@mantine/core';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useGetFavoritesQuery } from '../../store/api/api';
import { useAppSelector } from '../../store/hooks';

const FavoritesPage = () => {
  const vacanciesList = useAppSelector((state) => state.favoriteReducer.favorites);

  const { data } = useGetFavoritesQuery(vacanciesList);

  return (
    <>
      <Flex direction="row" align="flex-start" gap="xl">
        {data && <VacanciesList {...data} />}
      </Flex>
    </>
  );
};

export default FavoritesPage;
