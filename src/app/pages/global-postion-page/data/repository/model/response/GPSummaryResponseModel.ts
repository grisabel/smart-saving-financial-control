export interface GPSummaryResponseModel {
  expenses: ConceptResponseModel[];
  incomes: ConceptResponseModel[];
}

export interface ConceptResponseModel {
  date: string;
  amount: number;
}
