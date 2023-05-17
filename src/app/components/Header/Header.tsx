import { Burger, Header, MediaQuery, useMantineTheme, Flex, Menu, Title } from '@mantine/core';
import { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../assets/svg/Union.svg';
import { NavLink } from 'react-router-dom';
import './header.css';

const PageHeader = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Flex justify="center" sx={{}}>
      <Header
        height={{ base: 64, md: 84 }}
        pl="xl"
        pr="xl"
        sx={{ display: 'flex', alignItems: 'center', maxWidth: '1440px', width: '100%' }}
        className="header"
      >
        <Flex justify="space-between" gap="140px" sx={{ width: '100%' }} className="header-container">
          <Flex align="center" gap="sm" className="title">
            <LogoIcon />
            <Title order={4} size="1.5rem">
              Jobored
            </Title>
          </Flex>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Flex align="center" gap="60px" sx={{ width: 'calc(50% + 136px)' }}>
              <NavLink to="/" className="nav-link">
                Поиск вакансий
              </NavLink>
              <NavLink to="/favorites" className="nav-link">
                Избранное
              </NavLink>
            </Flex>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Menu>
              <Menu.Target>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="md" color={theme.colors.gray[6]} />
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>
                  <NavLink to="/" className="nav-link">
                    Поиск вакансий
                  </NavLink>
                </Menu.Item>
                <Menu.Item>
                  <NavLink to="/favorites" className="nav-link">
                    Избранное
                  </NavLink>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </MediaQuery>
        </Flex>
      </Header>
    </Flex>
  );
};

export default PageHeader;
