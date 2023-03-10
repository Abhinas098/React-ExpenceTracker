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

        {props.items.map((expenses, ind) => {
          return (
            <div key={ind}>
              <ExpenseItem
                Title={expenses.title}
                Date={expenses.date}
                Amount={expenses.amount}
              ></ExpenseItem>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
