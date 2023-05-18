import { Center, Flex, Loader } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useAppSelector } from '../../store/hooks';
import { useGetVacanciesQuery } from '../../store/api/api';
import PagComponent from '../../components/Pagination/Pagination';

const Main = () => {
  const params = useAppSelector((state) => state.commonReducer);

  const { data, isFetching, isLoading } = useGetVacanciesQuery(params);
  const pages = data?.total ? Math.ceil(data?.total / 4) : 125;

  return (
    <>
      {isLoading ? (
        <Center h="80vh" mx="auto">
          <Loader size="xl" variant="dots" />
        </Center>
      ) : (
        <Flex direction="row" align="flex-start" gap="28px" justify="center" p="40px" bg="#F7F7F8">
          <Form />
          <Flex direction="column" gap="md" w="100%" maw="773px">
            <Search />
            {isFetching ? <Loader size="xl" variant="dots" /> : data && <VacanciesList {...data} />}
            <PagComponent total={pages} reducer="common" />
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Main;
