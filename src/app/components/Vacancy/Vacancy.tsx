/* eslint-disable @typescript-eslint/naming-convention */
import { Flex, Text } from '@mantine/core';
import { VacancyObject } from '../../store/api/types';
import StarIcon from './StarIcon';
import { ReactComponent as LocationIcon } from '../../assets/svg/location.svg';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';
import './vacancy.css';

type Props = {
  vacancy: VacancyObject;
  type?: string;
};

const Vacancy = ({ vacancy, type }: Props) => {
  const { id, profession, town, type_of_work, payment_from, payment_to, currency } = vacancy;
  const navigate = useNavigate();

  const onClick = (e: MouseEvent<HTMLElement | SVGElement>) => {
    if (e.target instanceof HTMLElement && !window.location.pathname.includes('vacancies')) {
      if (!e.target.closest('.unstyled-button')) {
        navigate(`/vacancies/${id}`);
      }
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
      data-elem={`vacancy-${id}`}
      direction="column"
      onClick={onClick}
      p="23px"
      w="100%"
      data-id={id}
      gap={type === 'current' ? '14px' : 'sm'}
      bg="white"
      sx={{ border: '1px solid #EAEBED', borderRadius: '12px' }}
      className="vacancy"
    >
      <Flex justify="space-between" align="flex-start" gap="sm">
        <Text
          className="vacancy__header"
          size={type === 'current' ? '28px' : '20px'}
          fw={type === 'current' ? '700' : '600'}
          color={type === 'current' ? 'black' : 'main.5'}
          sx={
            type === 'current'
              ? {}
              : { flexGrow: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }
          }
        >
          {profession}
        </Text>
        <StarIcon id={id} />
      </Flex>
      <Flex className="vacancy__info" gap="sm" align="center" direction="row" sx={{ alignSelf: 'flex-start' }}>
        <Text
          className="vacancy__payment"
          fw={type === 'current' ? '700' : '600'}
          size={type === 'current' ? '20px' : 'inherit'}
        >
          {getPaymentString()}
        </Text>
        <Text w="5px" h="5px" bg="gray.6" sx={{ borderRadius: '10px' }} className="dot"></Text>
        <Text className="vacancy__type" size={type === 'current' ? '20px' : 'inherit'}>
          {type_of_work.title}
        </Text>
      </Flex>
      <Flex gap="xs" align="center">
        <LocationIcon />
        <Text className="vacancy__town" size="md">
          {town.title}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Vacancy;
