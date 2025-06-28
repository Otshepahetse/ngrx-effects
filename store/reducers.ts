import { createReducer, on, State } from '@ngrx/store';
import { ExpensesInterface, ExpenseStateInterface } from '../src/app/modals/expenses';
import * as actions from './actions';


export const initialState : ExpenseStateInterface = {
    items : [],
    loading: false,
    error: null

};

export const expencesReducer = createReducer(
  initialState,
  on(actions.LOAD_EXPENSES,(state)=>({
    ...state,
    loading:true,
    error:null
  })),
  on(actions.LOAD_EXPENSES_SUCCESSFUL,(state,{expenses})=>({
    ...state,
    items:expenses,
    loading:false,
    error:null
  })),
  on(actions.LOAD_EXPENSES_UNSUCCESSFUL,(state)=>({
    ...state,
    loading:true,
    error: "error message"
  })),
   on(actions.ADD_EXPENSES, (state) =>({
    ...state,
    loading:true
   })),
   on(actions.ADD_EXPENSES_SUCCESSFULL,(state,{expenseData})=>({
    ...state,
    items:[...state.items, expenseData],
    loading:false
   })),
    on(actions.ADD_EXPENSES_UNSUCCESSFULL,(state)=>({
    ...state,
    loading:true,
    error: "error message"
  })),
  on(actions.UPDATE_EXPENSES,(state)=>({
    ...state,
    loading:true
  })),
  on(actions.UPDATE_EXPENSES_SUCCESSFULL,(state,{expense})=>({
    ...state,
    items:state.items.map(item => item.id === expense.id ? expense : item),
    loading:false
  })),
    on(actions.UPDATE_EXPENSES_UNSUCCESSFULL,(state)=>({
    ...state,
    loading:true,
    error: "error message"
  })),
  on(actions.DELETE_EXPENSES,(state)=>({
    ...state,
    loading:true
  })),
   on(actions.DELETE_EXPENSES_SUCCESSFULL,(state, {expenseId})=>({
    ...state,
    items:state.items.filter(item => item.id != expenseId),
    loading:false
  })),
  on(actions.DELETE_EXPENSES_UNSUCCESSFULL,(state)=>({
    ...state,
    loading:true,
    error: "error message"
  }))

  )
;