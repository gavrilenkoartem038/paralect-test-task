import { Button, Flex, Text } from '@mantine/core';
import { ReactComponent as NotFoundImage } from '../../assets/svg/notFound.svg';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const matches = useMediaQuery('(max-width: 580px)');

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <Flex direction="column" gap="2rem" align="center" m="0 auto" pt={matches ? '60px' : '120px'}>
        <NotFoundImage />
        <Text fw="bold" fz={matches ? '16px' : '24px'}>
          Упс, здесь еще ничего нет!
        </Text>
        <Button onClick={onClick} variant="light" size="md" fz="14px" fw="600">
          Поиск Вакансий
        </Button>
      </Flex>
    </>
  );
};

export default NotFoundPage;
