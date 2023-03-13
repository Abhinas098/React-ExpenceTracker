import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const savaExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [addUser, setAddUser] = useState(false);
  const editHandler = () => {
    setAddUser(true);
  };

  const onCancel = () => {
    setAddUser(false);
  };
  return (
    <div className="new-expense">
      {!addUser ? (
        <button onClick={editHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={savaExpenseDataHandler}
          cancelItem={onCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
