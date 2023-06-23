import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { IMAGES } from "../../../../../constants/ImageConstants";
// import { useViewport } from '../../../../../hooks';
import { Box, Toolbar } from "../../../../Containers/index";
import { HeaderAppBar } from "../Settings";

function NavBar() {
  // const { isMobile } = useViewport();
  // const dispatch = useDispatch();
  const { isSideNavOpen } = useSelector((state) => state.utils);
  const checkLanguage = localStorage.getItem("selectedLanguage");

  useEffect(() => {
    checkLanguage ?? localStorage.setItem("selectedLanguage", "en");
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar-component" id="navbar">
      <HeaderAppBar
        open={isSideNavOpen}
        className="HeaderAppBar"
        position="absolute"
        sx={{
          bgcolor: "#ffff",
          justifyContent: "center",
          boxShadow: "rgb(0 0 0 / 16%) 0px 1px 4px",
        }}
      >
        <Toolbar>
          {/* {!isMobile && (
            <IconButton
              sx={{
                mr: 4,
                ...(isSideNavOpen && { display: 'none' }),
              }}
              // color="inherit"
              aria-label='open drawer'
              edge='start'
              onClick={() => {
                dispatch(toggleSideNav(!isSideNavOpen));
              }}
              className='mr-16'
            >
              <ICONS.MENU />
            </IconButton>
          )} */}
          <Box
            sx={{
              flexGrow: 1,
              pl: 1,
            }}
          >
            <img
              src={IMAGES.LOGO}
              height="48"
              width="48"
              style={{ aspectRatio: "3.6428/1" }}
              onClick={() => {
                window.location.reload();
              }}
              alt="logo"
            />
          </Box>

          <Box className="ml-auto">
            <Box sx={{ flexGrow: 0 }}>{/* <Avatar alt='Remy Sharp' /> */}</Box>
          </Box>
        </Toolbar>
      </HeaderAppBar>
    </Box>
  );
}

export default NavBar;
