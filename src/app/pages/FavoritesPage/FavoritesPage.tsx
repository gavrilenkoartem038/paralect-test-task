import { Center, Flex, Loader } from '@mantine/core';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useGetFavoritesQuery } from '../../store/api/api';
import { useAppSelector } from '../../store/hooks';
import PagComponent from '../../components/Pagination/Pagination';

const FavoritesPage = () => {
  const { favorites, page } = useAppSelector((state) => state.favoriteReducer);

  const subArr = favorites.slice(page * 4, page * 4 + 4);
  const pages = favorites.length <= 500 ? Math.ceil(favorites.length / 4) : 125;

  const { data, isFetching } = useGetFavoritesQuery(subArr);

  return (
    <>
      <Flex direction="column" gap="md" w="100%" maw="773px" justify="center" m="0 auto" pt="40px" pb="40px">
        {isFetching ? (
          <Center mih="608px" mx="auto">
            <Loader size="xl" variant="dots" />
          </Center>
        ) : (
          data && <VacanciesList {...data} />
        )}
        <PagComponent total={pages} reducer="favorites" />
      </Flex>
    </>
  );
};

export default FavoritesPage;
