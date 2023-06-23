import { DashBoard } from '../../app/Pages/Authenticated/Components';
import AppLayout from '../../app/Pages/Authenticated/Layout/index';
import { ROUTE } from '../../constants/Routes';

export const PrivateRouteConfig = [
  {
    path: '',
    element: <AppLayout />,
    children: [
      {
        path: ROUTE.ROOT,
        element: <DashBoard />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Error404 />,
  // },
];
