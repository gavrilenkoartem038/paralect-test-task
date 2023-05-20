import { TextInput, Button, createStyles } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSearchString } from '../../store/slices/commonSlice';
import { ChangeEvent, useState } from 'react';

const useStyles = createStyles(() => ({
  input: { height: '3rem' },
}));

const Search = () => {
  const searchString = useAppSelector((state) => state.commonReducer.searchString);
  const [searchValue, setSearchValue] = useState(searchString);
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClick = () => {
    dispatch(changeSearchString(searchValue));
  };

  const { classes } = useStyles();

  return (
    <TextInput
      classNames={{ input: classes.input }}
      onChange={onChange}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      rightSection={
        <Button onClick={onClick} h="2rem">
          Поиск
        </Button>
      }
      placeholder="Введите название вакансии"
      rightSectionWidth={110}
      value={searchValue}
    />
  );
};

export default Search;
