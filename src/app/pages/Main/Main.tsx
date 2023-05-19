import { Center, Flex, Loader } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useAppSelector } from '../../store/hooks';
import { useGetVacanciesQuery, useLoginQuery } from '../../store/api/api';
import PagComponent from '../../components/Pagination/Pagination';
import { loginData } from '../../store/api/data';
import { getToken } from '../../utils/tokenUtils';
import './main.css';

const Main = () => {
  const params = useAppSelector((state) => state.commonReducer);

  const { data: vacanciesData, isFetching } = useGetVacanciesQuery(params);

  const skipValue = getToken() ? true : false;
  useLoginQuery(loginData, { skip: skipValue });

  const pages = vacanciesData?.total as number;

  return (
    <>
      <Flex
        direction="row"
        align="flex-start"
        gap="28px"
        justify="center"
        p="40px 10px"
        bg="#F7F7F8"
        className="container"
      >
        <Form />
        <Flex direction="column" gap="md" w="100%" maw="773px">
          <Search />
          {isFetching ? (
            <Center mih="608px" mx="auto">
              <Loader size="xl" variant="dots" />
            </Center>
          ) : (
            vacanciesData && <VacanciesList {...vacanciesData} />
          )}
          <PagComponent total={pages} reducer="common" />
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
