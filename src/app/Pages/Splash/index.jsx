import React from 'react';

import { IMAGES } from '../../../constants/ImageConstants';
import { Grid } from '../../Containers/index';

export default function Splash() {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={3} sx={{ my: 'auto' }}>
          <img
            src={IMAGES.LOGO}
            alt='Splash'
            className='img-fluid'
            width={100}
            height={100}
          />
        </Grid>
      </Grid>
    </>
  );
}
