import { Box, Container, Flex } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';

const Main = () => {
  return (
    <>
      <Container sx={{ maxWidth: '1440px', padding: '40px' }}>
        <Flex direction="row" align="flex-start" gap="xl">
          <Form />
          <Flex direction="column" gap="lg">
            <Search />
            <VacanciesList />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default Main;
