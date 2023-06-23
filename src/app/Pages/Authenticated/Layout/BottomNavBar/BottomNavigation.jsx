import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
  Paper,
} from '../../../../Containers/index';

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE } from '../../../../../constants/Routes';
import { menu } from '../SideDrawer/Menu';

const useStyles = makeStyles({
  list: {
    '& .MuiTypography-root ': {
      // fontWeight: 500,
      // fontSize: '14px',
    },
    '& .MuiListItemIcon-root , .MuiListItemText-root': {
      color: 'black',
    },
    '& .MuiSvgIcon-root': {
      fill: 'black',
    },
    '& .MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected': {
      backgroundColor: '#17236E',

      '& .MuiListItemIcon-root , .MuiListItemText-root': {
        color: '#ffff',
      },
      '& .MuiSvgIcon-root': {
        fill: '#ffff',
      },
    },
  },
});
function BottomNavigationBar() {
  const classes = useStyles();

  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = location.pathname;
  const [value, setValue] = useState('');
  const [logoutOpen, setLogoutOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const toggleLogoutModal = (val) => {
    setLogoutOpen(val);
  };
  return (
    <Paper
      className={classes.list}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        '& .MuiButtonBase-root.MuiBottomNavigationAction-root.Mui-selected ': {
          color: 'black',
        },
        '& .MuiButtonBase-root.MuiBottomNavigationAction-root': {
          color: 'black',
          minWidth: '0px',
        },
      }}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        {menu?.map((i, key) => {
          const SVGIcon = i?.content;
          return (
            <BottomNavigationAction
              key={key?.toString()}
              className={
                currentUrl === ROUTE.ROOT ? 'secondary-main-blue-bg' : ''
              }
              onClick={() => {
                if (i?.path === ROUTE.LOGOUT) {
                  toggleLogoutModal(true);
                  return;
                }
                navigate(i?.path);
              }}
              value={i?.title}
              onChange={handleChange}
              icon={SVGIcon}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNavigationBar;
