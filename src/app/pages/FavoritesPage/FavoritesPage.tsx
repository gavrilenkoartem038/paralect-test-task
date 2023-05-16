import { Center, Flex, Loader } from '@mantine/core';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useGetFavoritesQuery } from '../../store/api/api';
import { useAppSelector } from '../../store/hooks';

const FavoritesPage = () => {
  const vacanciesList = useAppSelector((state) => state.favoriteReducer.favorites);

  const { data, isLoading } = useGetFavoritesQuery(vacanciesList);

  return (
    <>
      {isLoading ? (
        <Center h="80vh" mx="auto">
          <Loader size="xl" variant="dots" />
        </Center>
      ) : (
        <Flex direction="row" align="flex-start" gap="xl">
          {data && <VacanciesList {...data} />}
        </Flex>
      )}
    </>
  );
};

export default FavoritesPage;
