export const environment = {
  data: {
    logoutUrl: 'https://onboarding.smartsavings.dev/',
    toolsUrl:
      'https://onboarding.smartsavings.dev/financial-tools/compound-interest-calculator',
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
}
