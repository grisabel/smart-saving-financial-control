import { APP_ROUTES } from '@app/app-routes';

export const ACCOUNT_DETAIL_ROUTES = {
  summary: 'sumary',
  detail: 'details',
};

export const GLOBAL_ACCOUNT_DETAILS_ROUTES = {
  summary: `/${APP_ROUTES.accountDetail}/${ACCOUNT_DETAIL_ROUTES.summary}`,
  detail: `/${APP_ROUTES.accountDetail}/${ACCOUNT_DETAIL_ROUTES.detail}`,
};
