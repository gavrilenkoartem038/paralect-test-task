import { TextInput, Text, Checkbox, Button, Group, Paper, Flex, Select, createStyles } from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useGetCatalogueQuery } from '../../store/api/api';

const Form = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const { data } = useGetCatalogueQuery();

  const useStyles = createStyles((theme) => ({
    button: {
      '&:hover': {
        backgroundColor: theme.colors.main[5],
      },
    },
  }));

  const { classes } = useStyles();

  return (
    <Paper miw={315} mx="auto" shadow="xs" p="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Flex justify={'space-between'}>
          <Text fw={700} fz="xl">
            Фильтры
          </Text>
          <Button rightIcon={<IconX />} className={classes.button}>
            Сбросить все
          </Button>
        </Flex>
        <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />
        <Select
          label="Отрасль"
          placeholder="Выберите отрасль"
          data={data ? data.map((el) => el.title_trimmed) : []}
          searchable
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={40}
        />
        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Paper>
  );
};

export default Form;
