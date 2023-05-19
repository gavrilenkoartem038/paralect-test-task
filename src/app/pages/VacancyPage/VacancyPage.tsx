import { Box, Center, Flex, Loader, TypographyStylesProvider } from '@mantine/core';
import { useGetVacancyQuery } from '../../store/api/api';
import Vacancy from '../../components/Vacancy/Vacancy';

const VacancyPage = () => {
  const id = parseInt(window.location.pathname.split('/')[2]);

  const { data, isLoading } = useGetVacancyQuery(id);

  return (
    <>
      {isLoading ? (
        <Center h="800vh" mx="auto">
          <Loader size="xl" variant="dots" />
        </Center>
      ) : (
        <Flex direction="column" gap="20px" w="100%" maw="773px" justify="center" m="0 auto" pt="40px" pb="40px">
          {data && <Vacancy vacancy={data} type="current" />}
          <Box p="xl" data-id={id} bg="white" sx={{ border: '1px solid #EAEBED', borderRadius: '12px' }}>
            <TypographyStylesProvider>
              <div dangerouslySetInnerHTML={{ __html: data?.vacancyRichText as string }}></div>
            </TypographyStylesProvider>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default VacancyPage;
