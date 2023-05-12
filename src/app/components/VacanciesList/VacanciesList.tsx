import { Text, Paper, Title, Group, Flex } from '@mantine/core';
import { SearchObject, Vacancies, VacancyObject } from '../../store/api/types';
import { useGetVacanciesQuery } from '../../store/api/api';
import Vacancy from '../Vacancy/Vacancy';
import { useAppSelector } from '../../store/hooks';

const VacanciesList = (data: Vacancies) => {
  return (
    <Flex direction="column" gap="lg">
      {data?.objects.map((item) => (
        <Vacancy {...item} key={item.id} />
      ))}
    </Flex>
  );
};

export default VacanciesList;
