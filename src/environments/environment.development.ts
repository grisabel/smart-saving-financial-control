export const environment = {
  data: {
    logoutUrl: 'https://www.google.es/',
    toolsUrl:
      'http://localhost:4201/financial-tools/compound-interest-calculator',
    blogUrl: 'http://localhost:8080',
  },
  mock: true,
  endpoints: {
    baseUrl: '',
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
