import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage } from '../../store/slices/commonSlice';
import { changeFavPage } from '../../store/slices/favouritesSlice';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
  total: number;
  reducer: string;
};

function PagComponent({ total, reducer }: Props) {
  const red = reducer === 'common' ? 'commonReducer' : 'favoriteReducer';
  const page = useAppSelector((state) => state[red].page);
  const [activePage, setPage] = useState(page);
  const pages = total < 500 ? Math.ceil(total / 4) : 125;
  const dispatch = useAppDispatch();

  const matches = useMediaQuery('(max-width: 580px)');

  useEffect(() => {
    if (activePage > pages) {
      setPage(pages);
    }
    if (activePage === 0 && pages > 0) setPage(1);
    if (reducer === 'common') {
      dispatch(changePage(activePage));
    } else {
      dispatch(changeFavPage(activePage));
    }
  }, [activePage, pages]);

  return (
    <Pagination
      value={activePage}
      onChange={setPage}
      total={pages}
      sx={{ alignSelf: 'center' }}
      p="4px"
      size={matches ? 'sm' : 'md'}
      siblings={matches ? 0 : 1}
    />
  );
}

export default PagComponent;
