import { Text, Button, Flex, Select, createStyles, NumberInput } from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useGetCatalogueQuery } from '../../store/api/api';
import './form.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeFormParams } from '../../store/slices/commonSlice';
import { FormEvent, useState } from 'react';

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

  const useStyles = createStyles(() => ({
    controls: {
      border: 'none',
    },
  }));

  const { paymentFrom, paymentTo, catalogues } = useAppSelector((state) => state.commonReducer);
  const [valueFrom, setValueFrom] = useState<number | ''>(Number(paymentFrom) || '');
  const [valueTo, setValueTo] = useState<number | ''>(Number(paymentTo) || '');
  const [cataloguesValue, setCatalogues] = useState<string | null>(catalogues);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValues: FormValues = {
      paymentFrom: String(valueFrom),
      paymentTo: String(valueTo),
      catalogues: String(cataloguesValue),
    };
    dispatch(changeFormParams(formValues));
  };

  const { classes } = useStyles();

  return (
    <Flex miw={315} p="lg">
      <form onSubmit={onSubmit} className="form">
        <Flex justify={'space-between'}>
          <Text fw={700} fz="xl">
            Фильтры
          </Text>
          <Button rightIcon={<IconX />}>Сбросить все</Button>
        </Flex>
        <NumberInput
          label="Оклад"
          placeholder="От"
          step={1000}
          {...form.getInputProps('paymentFrom')}
          classNames={{ control: classes.controls }}
          value={valueFrom}
          onChange={setValueFrom}
        />
        <NumberInput
          placeholder="До"
          step={1000}
          {...form.getInputProps('paymentTo')}
          classNames={{ control: classes.controls }}
          value={valueTo}
          onChange={setValueTo}
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
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={40}
          {...form.getInputProps('catalogues')}
          value={cataloguesValue}
          onChange={setCatalogues}
        />
        <Button type="submit">Применить</Button>
      </form>
    </Flex>
  );
};

export default Form;
