// import { ThemeProvider } from "@mui/material/styles";
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { SnackBar } from './app/Containers';
import DefaultThemeProvider from './context/ThemeProvider';
import ViewportProvider from './context/ViewPortProvider';
import store from './redux/Store';
import Route from './routes';
import Loader from './utils/SuspenseLoader';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Provider store={store}>
        <DefaultThemeProvider>
          <ViewportProvider>
            <SnackBar />
            <BrowserRouter>
              <Route />
            </BrowserRouter>
          </ViewportProvider>
        </DefaultThemeProvider>
      </Provider>
    </Suspense>
  );
}

export default App;
