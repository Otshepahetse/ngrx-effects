export interface ExpensesInterface {
    id: string;
    description: string;
    amount : number;
    category:ExpenseCategoryInterface ;
    date: Date;
}

export type ExpenseCategoryInterface = 'Food' | 'Transport' | 'Shopping' | 'Utilities' | 'Income' | 'Other';

export interface ExpenseStateInterface {
    items:ExpensesInterface[];
    loading: boolean;
    error : string | null;
}