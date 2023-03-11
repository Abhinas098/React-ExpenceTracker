import React from "react";
import "./ExpenseList.css";

import ExpenseItem from "./ExpenseItem";

const Expenselist = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found</h2>;
  } else if (props.item.length === 1) {
    return (
      <div>
        {props.item.map((expense) => (
          <div key={expense.id}>
            <ExpenseItem
              Title={expense.title}
              Date={expense.date}
              Amount={expense.amount}
            ></ExpenseItem>
          </div>
        ))}
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </div>
    );
  }

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <div key={expense.id}>
          <ExpenseItem
            Title={expense.title}
            Date={expense.date}
            Amount={expense.amount}
          ></ExpenseItem>
        </div>
      ))}
    </ul>
  );
};
export default Expenselist;
