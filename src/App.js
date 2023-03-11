import React, { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpenses/NewExpense";

const dummyexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2022, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 7000,
    date: new Date(2023, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 500,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk ",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyexpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevexpense) => {
      return [expense, ...prevexpense];
      
    });
  };

  return (
    <Card className="expenses ">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Card>
  );
};

export default App;
