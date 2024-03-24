export const environment = {
  data: {
    logoutUrl: 'https://www.google.es/',
  },
  mock: false,
  endpoints: {
    baseUrl: 'http://localhost:3000',
    GlobalPositionAPI: {
      summary: '/financial-control/accounts/:accountNumber/summary/:year',
    },
    UserAPI: {
      info: '/user/info',
    },
    FinancialControlAPI: {
      addIncome: '/financial-control/accounts/:accountNumber/income',
      addExpense: '/financial-control/accounts/:accountNumber/expense',
    },
    SessionAPI: {
      logout: '/session/logout',
    },
  },
};
