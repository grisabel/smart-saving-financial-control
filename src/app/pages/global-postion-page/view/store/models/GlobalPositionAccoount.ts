export interface GlobalPositionAccount {
  accountId: string;
  accountName: string;
  data: {
    [year: string]: {
      // yyyy
      income: number;
      expense: number;
    };
  };
}
