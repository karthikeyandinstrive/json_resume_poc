import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useViewport } from '../../../../hooks';
import NavBar from './NavBar';
import { Main } from './Settings';

function AppLayout() {
  const { isMobile } = useViewport();
  const { isSideNavOpen } = useSelector((state) => state.utils);

  return (
    <React.Fragment>
      <NavBar />
      <Box
        component='main'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* {!isMobile && <SideDrawer />} */}
        <Main open={isSideNavOpen}>
          <Outlet />
        </Main>
      </Box>
      {/* {isMobile && <BottomNavigationBar />} */}
    </React.Fragment>
  );
}

export default AppLayout;
