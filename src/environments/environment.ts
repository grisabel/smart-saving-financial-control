export const environment = {
  mock: false,
  endpoints: {
    baseUrl: 'http://localhost:3000',
    GlobalPositionAPI: {
      summary: '/financial-control/accounts/:accountNumber/summary/:year',
    },
    UserAPI: {
      info: '/user/info',
    },
  },
};
