import React from 'react';
import { Box, CircularProgress } from '../../app/Containers/index';
function Loader() {
  return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
  );
}

export default Loader;