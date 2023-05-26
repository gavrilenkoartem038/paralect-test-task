import { TextInput, Button, createStyles } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSearchString } from '../../store/slices/commonSlice';
import { ChangeEvent, useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/svg/Search.svg';

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
      data-elem="search-input"
      classNames={{ input: classes.input }}
      onChange={onChange}
      icon={<SearchIcon />}
      rightSection={
        <Button onClick={onClick} h="2rem" data-elem="search-button">
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
