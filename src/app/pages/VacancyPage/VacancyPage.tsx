import { Center, Flex, Loader } from '@mantine/core';
import { useGetVacancyQuery } from '../../store/api/api';
import Vacancy from '../../components/Vacancy/Vacancy';

const VacancyPage = () => {
  const id = parseInt(window.location.pathname.split('/')[2]);

  const { data, isLoading } = useGetVacancyQuery(id);

  return (
    <>
      {isLoading ? (
        <Center h="80vh" mx="auto">
          <Loader size="xl" variant="dots" />
        </Center>
      ) : (
        <Flex direction="row" align="flex-start" gap="xl">
          {data && <Vacancy {...data} />}
        </Flex>
      )}
    </>
  );
};

export default VacancyPage;
