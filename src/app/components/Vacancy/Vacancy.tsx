import { Paper, Title } from '@mantine/core';
import { VacancyObject } from '../../store/api/types';
import StarIcon from './StarIcon';

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
    <Paper shadow="none" withBorder p="xl" data-id={id}>
      <StarIcon id={id} />
      <Title order={4} size="1.5rem" color="main.6">
        {profession}
      </Title>
      <div>{getPaymentString()}</div>
    </Paper>
  );
};

export default Vacancy;
