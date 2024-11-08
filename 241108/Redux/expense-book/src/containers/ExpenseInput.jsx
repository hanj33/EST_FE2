import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../store/expense/expenseSlice";

export default function ExpenseInput() {
  const dispatch = useDispatch();

  const [expenseName, setExpenseName] = useState("");
  const [expensePrice, setExpensePrice] = useState("0");

  const submit = (event) => {
    event.preventDefault();
    dispatch(addExpenseAction({ name: expenseName, price: expensePrice }));
  };

  return (
    <form onSubmit={submit}>
      <label style={{ display: "block" }}>
        물건 이름:{" "}
        <input
          type="text"
          placeholder="예시) coffee"
          onChange={(event) => setExpenseName(event.target.value)}
          value={expenseName}
        />
      </label>
      <label style={{ display: "block" }}>
        물건 가격:{" "}
        <input
          type="number"
          placeholder="예시) 1500"
          onChange={(event) => Number(setExpensePrice(event.target.value))}
          value={expensePrice}
        />
      </label>

      <button type="submit">추가하기</button>
      <hr />
    </form>
  );
}
