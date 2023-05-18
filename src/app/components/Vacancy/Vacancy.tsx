import { Flex, Text, Title } from '@mantine/core';
import { VacancyObject } from '../../store/api/types';
import StarIcon from './StarIcon';
import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const Vacancy = ({ id, profession, town, type_of_work, payment_from, payment_to, currency }: VacancyObject) => {
  const navigate = useNavigate();

  const onClick = (e: MouseEvent<HTMLElement | SVGElement>) => {
    if (e.target instanceof HTMLElement && !window.location.pathname.includes('vacancies')) {
      navigate(`/vacancies/${id}`);
    }
  };

  const getPaymentString = () => {
    const arr = ['з/п'];
    if (payment_from) {
      arr.push(`от ${payment_from}`);
    }
    if (payment_to) {
      arr.push(`от ${payment_to}`);
    } else {
      return 'з/п по договоренности';
    }
    return `${arr.join(' ')} ${currency}`;
  };

  return (
    <Flex
      direction="column"
      onClick={onClick}
      p="xl"
      data-id={id}
      gap="sm"
      bg="white"
      sx={{ border: '1px solid #EAEBED', borderRadius: '12px' }}
    >
      <Flex justify="space-between" gap="sm">
        <Text
          w="200px"
          fw="600"
          size="20px"
          color="main.6"
          sx={{ flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {profession}
        </Text>
        <StarIcon id={id} />
      </Flex>
      <Flex gap="sm" align="center">
        <Text fw="600">{getPaymentString()}</Text>
        <Text w="10px" h="10px" bg="gray1.5" sx={{ borderRadius: '10px' }}></Text>
        <Text>{type_of_work.title}</Text>
      </Flex>
      <Flex gap="sm" align="center">
        <LocationIcon />
        <Text>{town.title}</Text>
      </Flex>
    </Flex>
  );
};

export default Vacancy;
