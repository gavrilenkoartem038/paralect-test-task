import { TextInput, Button } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changeSearchString } from '../../store/slices/commonSlice';
import { ChangeEvent, useState } from 'react';

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

  return (
    <TextInput
      onChange={onChange}
      icon={<IconSearch size="1.1rem" stroke={1.5} />}
      size="md"
      rightSection={<Button onClick={onClick}>Поиск</Button>}
      placeholder="Search questions"
      rightSectionWidth={120}
    />
  );
};

export default Search;
