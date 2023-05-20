import { Center, Flex, Loader } from '@mantine/core';
import Form from '../../components/Form/Form';
import Search from '../../components/Search/Search';
import VacanciesList from '../../components/VacanciesList/VacanciesList';
import { useAppSelector } from '../../store/hooks';
import { useGetVacanciesQuery, useLoginQuery } from '../../store/api/api';
import PagComponent from '../../components/Pagination/Pagination';
import { loginData } from '../../store/api/data';
import { getToken } from '../../utils/tokenUtils';
import { useMediaQuery } from '@mantine/hooks';

const Main = () => {
  const params = useAppSelector((state) => state.commonReducer);

  const { data: vacanciesData, isFetching } = useGetVacanciesQuery(params);

  const skipValue = getToken() ? true : false;
  useLoginQuery(loginData, { skip: skipValue });

  const pages = vacanciesData?.total as number;

  const matches = useMediaQuery('(max-width: 1000px)');

  return (
    <>
      <Flex
        direction="row"
        align="flex-start"
        gap="28px"
        justify="center"
        p="40px"
        bg="#F7F7F8"
        className="container"
        mih="calc(100vh - 84px)"
      >
        <Form />
        <Flex
          direction="column"
          gap="md"
          w="100%"
          maw="773px"
          justify="space-between"
          sx={{ alignSelf: matches ? 'unset' : 'normal', flexGrow: 1 }}
        >
          <Search />
          {isFetching ? (
            <Center h={'680px'}>
              <Loader size="xl" variant="dots" />
            </Center>
          ) : (
            vacanciesData && (
              <>
                <VacanciesList {...vacanciesData} />
                <PagComponent total={pages} reducer="common" />
              </>
            )
          )}
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
