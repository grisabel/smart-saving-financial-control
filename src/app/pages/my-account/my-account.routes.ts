import { APP_ROUTES } from '@app/app-routes';

export const MY_ACCOUNT_ROUTES = {
  myAccountInfoDetails: 'info-details',
};

export const GLOBAL_MY_ACCOUNT_ROUTES = {
  myAccountInfoDetails: `/${APP_ROUTES.myAccount}/${MY_ACCOUNT_ROUTES.myAccountInfoDetails}`,
};
