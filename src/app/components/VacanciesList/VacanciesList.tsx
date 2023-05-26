import { Flex } from '@mantine/core';
import { Vacancies } from '../../store/api/types';
import Vacancy from '../Vacancy/Vacancy';

const VacanciesList = (data: Vacancies) => {
  return (
    <Flex direction="column" gap="md" mb="auto" w="100%">
      {data?.objects.map((item) => (
        <Vacancy vacancy={item} key={item.id} />
      ))}
    </Flex>
  );
};

export default VacanciesList;
