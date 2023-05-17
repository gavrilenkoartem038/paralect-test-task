import { Text, Checkbox, Button, Group, Flex, Select, createStyles, Box, NumberInput } from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useGetCatalogueQuery } from '../../store/api/api';
import './form.css';
import { useAppDispatch } from '../../store/hooks';
import { changeFormParams } from '../../store/slices/commonSlice';

export type FormValues = {
  catalogues: string;
  paymentFrom: string;
  paymentTo: string;
};

const Form = () => {
  const dispatch = useAppDispatch();

  const form = useForm({
    initialValues: {
      catalogues: '',
      paymentFrom: '',
      paymentTo: '',
    },

    validate: {
      paymentTo: (value, values) => (value < values.paymentFrom ? 'Введите правильный диапазон' : null),
    },
  });

  const { data } = useGetCatalogueQuery();

  const useStyles = createStyles((theme) => ({
    button: {
      '&:hover': {
        backgroundColor: theme.colors.main[5],
      },
    },
    controls: {
      border: 'none',
    },
  }));

  const { classes } = useStyles();

  const onSubmit = (values: FormValues) => {
    console.log(values);
    dispatch(changeFormParams(values));
  };

  return (
    <Flex miw={315} p="lg">
      <form onSubmit={form.onSubmit((values) => dispatch(changeFormParams(values)))} className="form">
        <Flex justify={'space-between'}>
          <Text fw={700} fz="xl">
            Фильтры
          </Text>
          <Button rightIcon={<IconX />} className={classes.button}>
            Сбросить все
          </Button>
        </Flex>
        <NumberInput
          label="Оклад"
          placeholder="От"
          step={1000}
          {...form.getInputProps('paymentFrom')}
          classNames={{ control: classes.controls }}
        />
        <NumberInput
          placeholder="До"
          step={1000}
          {...form.getInputProps('paymentTo')}
          classNames={{ control: classes.controls }}
        />
        <Select
          label="Отрасль"
          placeholder="Выберите отрасль"
          data={
            data
              ? data.map((el) => {
                  return { value: String(el.key), label: el.title_trimmed };
                })
              : []
          }
          searchable
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={40}
          {...form.getInputProps('catalogues')}
        />
        <Button type="submit">Применить</Button>
      </form>
    </Flex>
  );
};

export default Form;
