import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage } from '../../store/slices/commonSlice';
import { changeFavPage } from '../../store/slices/favouritesSlice';

type Props = {
  total: number;
  reducer: string;
};

function PagComponent({ total, reducer }: Props) {
  const red = reducer === 'common' ? 'commonReducer' : 'favoriteReducer';
  const page = useAppSelector((state) => state[red].page);
  const [activePage, setPage] = useState(page + 1);
  const pages = total < 125 ? total : 125;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (activePage > pages) {
      setPage(pages);
    }
    if (reducer === 'common') {
      dispatch(changePage(activePage - 1));
    } else {
      dispatch(changeFavPage(activePage - 1));
    }
  }, [activePage, pages]);

  return <Pagination value={activePage} onChange={setPage} total={pages} sx={{ alignSelf: 'center' }} pt="24px" />;
}

export default PagComponent;
