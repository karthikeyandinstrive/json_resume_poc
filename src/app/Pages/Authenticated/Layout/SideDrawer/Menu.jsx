import { ICONS } from '../../../../../constants/Icons';
import { ROUTE } from '../../../../../constants/Routes';

export const menu = [
  {
    title: 'Dashboard',
    path: ROUTE.ROOT,
    content: <ICONS.DASHBOARD_ICON />,
  },

  {
    title: 'Logout',
    path: ROUTE.LOGOUT,
    content: <ICONS.LOGOUT_ICON />,
  },
];
