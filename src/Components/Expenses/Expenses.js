import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };


  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No Expenses Found</p>

  if (filteredExpense.length > 0){
    expenseContent = filteredExpense.map((expense) => {
      return (
        <div key={expense.id}>
          <ExpenseItem
            Title={expense.title}
            Date={expense.date}
            Amount={expense.amount}
          ></ExpenseItem>
        </div>
      );
    })
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {expenseContent}

        
      </Card>
    </div>
  );
};

export default Expenses;
