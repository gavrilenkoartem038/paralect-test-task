import { Button, Flex, Text } from '@mantine/core';
import { ReactComponent as NotFoundImage } from '../../assets/svg/notFound.svg';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  };

  return (
    <>
      <Flex direction="column" gap="2rem" align="center" m="0 auto" pt="120px">
        <NotFoundImage />
        <Text fw="bold" fz="24px">
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
