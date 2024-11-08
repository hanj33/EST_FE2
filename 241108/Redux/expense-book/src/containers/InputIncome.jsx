import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIncomeAction } from "../store/expense/expenseSlice";
import store from "../store";

export default function InputIncome() {
  const dispatch = useDispatch();

  const income = useSelector((store) => {
    return store.EXPENSE.income;
  });

  const setIncome = (event) => {
    dispatch(Number(setIncomeAction(event.target.value)));
  };
  return (
    <label>
      나의 수익: <input type="text" onChange={setIncome} value={income} />
    </label>
  );
}
