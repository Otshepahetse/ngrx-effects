import { createReducer, on } from '@ngrx/store';
import { ExpensesInterface, ExpenseStateInterface } from '../src/app/modals/expenses';
import { LOAD_EXPENSES } from './actions';


export const initialState : ExpenseStateInterface = {
    items : [],
    loading: false,
    error: null

};

export const expencesReducer = createReducer(
  initialState,
  on(LOAD_EXPENSES,(state)=>({
    ...state,
    loading:false,
    error:null
  }))
);