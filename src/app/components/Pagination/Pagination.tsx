import { useEffect, useState } from 'react';
import { Pagination } from '@mantine/core';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { changePage } from '../../store/slices/commonSlice';

type Props = {
  total: number;
};

function PagComponent({ total }: Props) {
  const page = useAppSelector((state) => state.commonReducer.page);
  const [activePage, setPage] = useState(page + 1);
  const pages = total < 125 ? total : 125;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePage(activePage - 1));
  }, [activePage]);

  return <Pagination value={activePage} onChange={setPage} total={pages} sx={{ alignSelf: 'center' }} pt="24px" />;
}

export default PagComponent;
