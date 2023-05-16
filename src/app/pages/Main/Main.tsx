import { Center, Flex, Loader } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useAppSelector } from '../../store/hooks';
import { useGetVacanciesQuery } from '../../store/api/api';

const Main = () => {
  const params = useAppSelector((state) => state.commonReducer);

  const { data, isLoading } = useGetVacanciesQuery(params);

  return (
    <>
      {isLoading ? (
        <Center h="80vh" mx="auto">
          <Loader size="xl" variant="dots" />
        </Center>
      ) : (
        <Flex direction="row" align="flex-start" gap="xl">
          <Form />
          <Flex direction="column" gap="lg">
            <Search />
            {data && <VacanciesList {...data} />}
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default Main;
