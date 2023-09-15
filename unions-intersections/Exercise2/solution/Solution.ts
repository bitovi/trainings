interface Mortgage {
  interest: number;
  principle: number;
}

interface NonMortgageExpenses {
  propertyTax: number;
  insurance: number;
  hoa: number;
}

interface MonthlyExpenses {
  electricity: number;
  water: number;
  gas: number;
  savings: number;
}

type HomeMonthlyExpense = Mortgage & NonMortgageExpenses & MonthlyExpenses; // Fixed

const expenses: HomeMonthlyExpense = {
  electricity: 100,
  water: 125,
  gas: 95,
  savings: 1000,
  propertyTax: 500,
  insurance: 110,
  hoa: 40,
  interest: 100,
  principle: 900,
};
