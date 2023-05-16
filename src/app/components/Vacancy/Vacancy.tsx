import { Paper, Title } from '@mantine/core';
import { VacancyObject } from '../../store/api/types';
import StarIcon from './StarIcon';
import { useNavigate } from 'react-router-dom';
import { MouseEvent } from 'react';

const Vacancy = ({
  id,
  profession,
  firm_name,
  town,
  type_of_work,
  payment,
  payment_from,
  payment_to,
  currency,
}: VacancyObject) => {
  const navigate = useNavigate();

  const onClick = (e: MouseEvent<HTMLElement | SVGElement>) => {
    if (e.target instanceof HTMLElement && !window.location.pathname.includes('vacancies')) {
      navigate(`/vacancies/${id}`);
    }
  };

  const getPaymentString = () => {
    let str = 'з/п ';
    if (payment) {
      str += payment;
    }
    if (payment_from) {
      str += `от ${payment_from}`;
    }
    if (payment_to) {
      str += `до ${payment_to}`;
    }
    return `${str} ${currency}`;
  };

  return (
    <Paper onClick={onClick} shadow="none" withBorder p="xl" data-id={id} maw="773px">
      <StarIcon id={id} />
      <Title order={4} size="1.5rem" color="main.6">
        {profession}
      </Title>
      <div>{getPaymentString()}</div>
    </Paper>
  );
};

export default Vacancy;
