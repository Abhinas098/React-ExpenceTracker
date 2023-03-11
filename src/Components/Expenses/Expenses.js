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

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => {
          return (
            <div key={expense.id}>
              <ExpenseItem
                Title={expense.title}
                Date={expense.date}
                Amount={expense.amount}
              ></ExpenseItem>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
