import { Flex } from '@mantine/core';
import { ReactComponent as NotFoundImage } from '../../assets/svg/notFound.svg';

const NotFoundPage = () => {
  return (
    <>
      <Flex direction="column" gap="md" align="center" m="0 auto" pt="120px">
        <NotFoundImage />
      </Flex>
    </>
  );
};

export default NotFoundPage;
