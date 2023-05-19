import { Text, Button, Flex, Select, createStyles, NumberInput } from '@mantine/core';
import { IconChevronDown, IconX } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { useGetCatalogueQuery } from '../../store/api/api';
import './form.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeFormParams } from '../../store/slices/commonSlice';
import { FormEvent, useState } from 'react';
import { ReactComponent as DownIcon } from '../../assets/svg/down.svg';

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
    <Flex miw={315} p="18px 20px" sx={{ border: '1px solid #EAEBED', borderRadius: '12px', backgroundColor: 'white' }}>
      <form onSubmit={onSubmit} className="form">
        <Flex justify={'space-between'} align="flex-start">
          <Text fw={700} fz="xl" lh="1" mb="2rem">
            Фильтры
          </Text>
          <Button variant="subtle" compact p="0" ml="4px" h="20px" fw="500" rightIcon={<IconX size="14px" />}>
            Сбросить все
          </Button>
        </Flex>
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
          rightSection={<DownIcon />}
          rightSectionWidth={46}
          {...form.getInputProps('catalogues')}
          value={cataloguesValue}
          onChange={setCatalogues}
          mb="20px"
        />
        <NumberInput
          label="Оклад"
          placeholder="От"
          step={1000}
          {...form.getInputProps('paymentFrom')}
          classNames={{ control: classes.controls }}
          value={valueFrom}
          onChange={setValueFrom}
          mb="0.5rem"
        />
        <NumberInput
          placeholder="До"
          step={1000}
          {...form.getInputProps('paymentTo')}
          classNames={{ control: classes.controls }}
          value={valueTo}
          onChange={setValueTo}
          mb="1.25rem"
        />
        <Button type="submit" h="40px">
          Применить
        </Button>
      </form>
    </Flex>
  );
};

export default Form;
