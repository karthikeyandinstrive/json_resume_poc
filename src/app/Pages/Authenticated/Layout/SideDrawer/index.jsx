import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ICONS } from '../../../../../constants/Icons';
import { ROUTE } from '../../../../../constants/Routes';
import { toggleSideNav } from '../../../../../redux/Reducer/Utils';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Tooltip,
} from '../../../../Containers/index';
import LogoutModal from '../../../Auth/Components/Logout';
import { NavDrawer } from '../Settings/index';
import { menu } from './Menu';

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
    '& .MuiButtonBase-root.MuiListItemButton-root.Mui-selected': {
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
function SideDrawer() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSideNavOpen } = useSelector((state) => state.utils);
  const [logoutOpen, setLogoutOpen] = useState(false);

  const location = useLocation();

  const currentUrl = location.pathname;

  const toggleLogoutModal = (value) => {
    setLogoutOpen(value);
  };
  return (
    <NavDrawer
      variant='permanent'
      open={isSideNavOpen}
      sx={{
        display: {
          xs: 'none',
          sm: 'none',
          md: 'block',
          lg: 'block',
        },
      }}
    >
      <LogoutModal open={logoutOpen} handleClose={toggleLogoutModal} />
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={() => dispatch(toggleSideNav(!isSideNavOpen))}>
          <ICONS.CHEVRON_LEFT />
        </IconButton>
      </Toolbar>

      <Divider />
      <List className={classes.list}>
        {menu?.map((i, key) => {
          const SVGIcon = i?.content;
          return (
            <React.Fragment key={key?.toString()}>
              <Tooltip
                title={isSideNavOpen ? '' : i?.title}
                arrow
                placement='right'
              >
                <ListItem
                  disablePadding
                  className='display-block'
                  onClick={() => {
                    if (i?.path === ROUTE.LOGOUT) {
                      toggleLogoutModal(true);
                      return;
                    }
                    navigate(i?.path);
                  }}
                >
                  <ListItemButton
                    selected={currentUrl === i?.path}
                    className={
                      currentUrl === i?.path ? 'secondary-main-blue-bg' : ''
                    }
                  >
                    <ListItemIcon className='min-icon-width'>
                      {SVGIcon}
                    </ListItemIcon>
                    <ListItemText
                      sx={{ fontWeight: 500 }}
                      primary={i.title}
                      className={
                        isSideNavOpen
                          ? `opacity-1 ${
                              currentUrl === i?.path && !logoutOpen
                                ? 'color-white'
                                : ''
                            } `
                          : 'opacity-0'
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Tooltip>
            </React.Fragment>
          );
        })}
      </List>
    </NavDrawer>
  );
}

export default SideDrawer;
