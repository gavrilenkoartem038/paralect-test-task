import { Flex } from '@mantine/core';
import { Vacancies } from '../../store/api/types';
import Vacancy from '../Vacancy/Vacancy';

const VacanciesList = (data: Vacancies) => {
  return (
    <Flex direction="column" gap="md">
      {data?.objects.map((item) => (
        <Vacancy {...item} key={item.id} />
      ))}
    </Flex>
  );
};

export default VacanciesList;
