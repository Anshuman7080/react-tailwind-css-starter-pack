import { configureStore } from '@reduxjs/toolkit'

import { NameSlice } from './NameSlice'
// import { AddBudget } from '../AddBudget'

import { ComponentSlice } from './ComponentSlice'
import { ExpenseSlice } from '../ExpenseSlice'

export const store = configureStore({
  reducer: {
    Compo:ComponentSlice.reducer,
    name:NameSlice.reducer,
    expense:ExpenseSlice.reducer,
   compo: ComponentSlice,
    
  },
})