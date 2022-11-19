export interface Employee {
  firstName: string;
  lastName: string;
  annualSalary: any;
  superRate: any;
  paymentStartDate: string;
}
export interface CalculateRepsonse {
  name: string;
  payPeriod: string;
  grossIncome: number;
  incomeTax: number;
  netIncome: number;
  superAnnual: number;
}
