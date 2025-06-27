import { createAction, props } from '@ngrx/store';
import { ExpenseDataInterface, ExpensesInterface } from '../src/app/modals/expenses';


//expences
export const LOAD_EXPENSES = createAction(
  '[LOAD EXPENSES] Load the expenses'
);

export const LOAD_EXPENSES_SUCCESSFUL = createAction(
  '[LOAD EXPENSES API] Load expenses successful',
  props<{expenses: ExpensesInterface[]}>()
);

export const LOAD_EXPENSES_UNSUCCESSFUL = createAction(
  '[LOAD EXPENSES API] Load expenses Unsuccessful',
  props<{error: any}>()
);

//add

export const ADD_EXPENSES = createAction(
  '[ADD EXPENSE] Add expenses',
  props<{expenseData : ExpenseDataInterface}>()
);

export const ADD_EXPENSES_SUCCESSFULL = createAction(
  '[ADD EXPENSE API] Add expenses successful',
  props<{expenseData : ExpenseDataInterface}>()
);

export const ADD_EXPENSES_UNSUCCESSFULL = createAction(
  '[ADD EXPENSE API] Add expenses Umsuccessful',
  props<{error: any}>()
);

//update

export const UPDATE_EXPENSES = createAction(
  '[UPDATE EXPENSE] Update expense',
  props<{expense : ExpensesInterface}>()
);

export const UPDATE_EXPENSES_SUCCESSFULL = createAction(
  '[UPDATE EXPENSE API] Update expense successfully',
  props<{expense : ExpensesInterface}>()
);

export const UPDATE_EXPENSES_UNSUCCESSFULL = createAction(
  '[UPDATE EXPENSE API] Update expense Unsuccessfully',
  props<{error:any}>()
);

//delete

export const DELETE_EXPENSES = createAction(
  '[DELETE EXPENSE] Delete expense',
  props<{expenseId :string }>()
);

export const DELETE_EXPENSE0S_SUCCESSFULL = createAction(
  '[DELETE EXPENSE API] Delete expense successfully',
  props<{expenseId :string }>()
);

export const DELETE_EXPENSE0S_UNSUCCESSFULL = createAction(
  '[DELETE EXPENSE API] Delete expense Unsuccessful',
  props<{ error : any }>()
);