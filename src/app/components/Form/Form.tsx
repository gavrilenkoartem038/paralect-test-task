import { TextInput, Text, Checkbox, Button, Group, Box, Paper, Flex } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
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

  const { data } = useGetCatalogueQuery('');
  console.log(data);

  return (
    <Paper maw={315} mx="auto" shadow="xs" p="lg">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Flex justify={'space-between'}>
          <Text fw={700}>Фильтры</Text>
          <Button rightIcon={<IconX />}>Сбросить все</Button>
        </Flex>
        <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps('email')} />

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
