import { Outlet } from 'react-router-dom';
import PageHeader from '../Header/Header';

const Layout = () => {
  return (
    <>
      <PageHeader />
      <Outlet />
    </>
  );
};

export default Layout;
