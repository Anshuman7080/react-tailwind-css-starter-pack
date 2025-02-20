import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: '',
};

export const NameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    delName:(state,acion)=>{
      state.name='';
    }
  },
});

export const { setName,delName } = NameSlice.actions;
export default NameSlice.reducer;
