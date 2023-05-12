import { Container } from '@mantine/core';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Container sx={{ maxWidth: '1440px', padding: '40px' }}>
      {/* <Header /> */}
      <div>header</div>
      <Outlet />
    </Container>
  );
};

export default Layout;
