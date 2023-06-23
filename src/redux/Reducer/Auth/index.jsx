import { createSlice } from '@reduxjs/toolkit';
import { PrivateRouteConfig } from '../../../routes/PrivateRoute/PrivateRoute';
import { SplashRouteConfig } from '../../../routes/SplashRoute/SplashRoute';

const initialState = {
  isUserLoggedIn: false,
  route: SplashRouteConfig,
};

let authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    handleUserLoggedIn: function (state, action) {
      state.isUserLoggedIn = action.payload;
      if (action.payload) {
        state.route = PrivateRouteConfig;
      } 
    },
  },
});
export const { handleUserLoggedIn } = authSlice.actions;
export default authSlice.reducer;
