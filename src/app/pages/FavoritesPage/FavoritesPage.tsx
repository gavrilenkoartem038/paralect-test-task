import { Center, Flex, Loader } from '@mantine/core';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useGetFavoritesQuery } from '../../store/api/api';
import { useAppSelector } from '../../store/hooks';
import PagComponent from '../../components/Pagination/Pagination';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FavoritesPage = () => {
  const { favorites, page } = useAppSelector((state) => state.favoriteReducer);

  const subArr = favorites.slice((page - 1) * 4, page * 4);
  const pages = favorites.length;

  const { data, isFetching } = useGetFavoritesQuery(subArr);

  const navigate = useNavigate();

  useEffect(() => {
    if (favorites.length === 0) {
      navigate('/empty');
    }
  }, [navigate, favorites]);

  return (
    <>
      <Flex direction="column" gap="md" w="100%" maw="773px" justify="center" m="0 auto" p="40px" className="container">
        {isFetching ? (
          <Center h="calc(100vh - 120px)">
            <Loader size="xl" variant="dots" />
          </Center>
        ) : (
          data && (
            <>
              <VacanciesList {...data} />
              <PagComponent total={pages} reducer="favorites" />
            </>
          )
        )}
      </Flex>
    </>
  );
};

export default FavoritesPage;
