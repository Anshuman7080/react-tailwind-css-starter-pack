import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const ExpenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExp: (state, action) => {
      state.expenses.push(action.payload);
    },
    delExp: (state, action) => {
       state.expenses = state.expenses.filter(expense => expense.name !== action.payload.name);
    },
    delAllExp: (state) => { state.expenses = [];

     },
  },
});




export const { addExp, delExp,delAllExp } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
