export const environment = {
  data: {
    logoutUrl: 'https://smartsavings.dev/login',
    toolsUrl:
      'https://smartsavings.dev/login/:language/financial-tools/compound-interest-calculator',
    blogUrl: 'https://blog.smartsavings.dev',
  },
  mock: false,
  endpoints: {
    baseUrl: 'https://smartsavings.dev/api',
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
