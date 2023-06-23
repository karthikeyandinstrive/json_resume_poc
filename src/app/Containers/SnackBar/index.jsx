import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSnackBar } from '../../../redux/Reducer/Utils';
import { Alert as MuiAlert, Snackbar, Stack } from '../index';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export default function SnackBar() {
  const dispatch = useDispatch();

  const { isOpen, type, message } = useSelector(
    (state) => state?.utils?.snackbar
  );
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      toggleSnackBar({
        isOpen: false,
        type: '',
        message: '',
      })
    );
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Alert sx={{ minWidth: '300px', maxWidth: '600px' }} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
