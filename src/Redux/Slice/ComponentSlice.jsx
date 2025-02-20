import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Budgets: [],
};

export const ComponentSlice = createSlice({
  
  name: "Compo",
  initialState,
  reducers: {
    add: (state, action) => {
      state.Budgets.push(action.payload);
    },
   
    remove: (state, action) => {
      state.Budgets = state.Budgets.filter(item => item.budgetName !== action.payload.budgetName);
    },
    removeAll: (state) => {
       state.Budgets = [];

     },
  },
});


export const { add, remove ,removeAll} = ComponentSlice.actions;
export default ComponentSlice.reducer;
