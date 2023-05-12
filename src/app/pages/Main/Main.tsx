import { Flex } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useAppSelector } from '../../store/hooks';
import { useGetVacanciesQuery } from '../../store/api/api';

const Main = () => {
  const params = useAppSelector((state) => state.commonReducer);

  const { data } = useGetVacanciesQuery(params);

  return (
    <>
      <Flex direction="row" align="flex-start" gap="xl">
        <Form />
        <Flex direction="column" gap="lg">
          <Search />
          {data && <VacanciesList {...data} />}
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
