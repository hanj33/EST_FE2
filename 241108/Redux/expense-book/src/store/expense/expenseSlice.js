import { createSlice, current } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    expenseList: [
      //       { name: "computer", price: 10000 },
      //       { name: "coffee", price: 500 },
      //       { name: "icecream", price: 300 },
    ],
    income: 0,
  },
  reducers: {
    //     addExpenseAction: (currentSlice) => {
    //       currentSlice.expenseList.push({ name: "icecream", price: 300 });
    //     },
    addExpenseAction: (currentSlice, action) => {
      currentSlice.expenseList.push(action.payload);
    },
    setIncomeAction: (currentSlice, action) => {
      currentSlice.income = action.payload;
    },
  },
});

const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

export { expenseSlice, addExpenseAction, setIncomeAction };
