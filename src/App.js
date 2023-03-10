import React from "react";
import "./App.css";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";
import NewExpense from './Components/NewExpenses/NewExpense';

const App =() => {
  const expenses = [
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

  const addExpenseHandler = (expense) =>{

    console.log('In App.js')
    console.log(expense)

  }

  return (
    <Card  className='expenses '>
      <NewExpense onAddExpense= {addExpenseHandler}/>
      
      {expenses.map((expenses,ind) => {
        return (
          <div key ={ind}>
          <ExpenseItem
            Title={expenses.title}
            Date={(expenses.date)}
            Amount={expenses.amount}>
            </ExpenseItem>
            </div>    
        );
      })}
      
    </Card>
    
  );
}

export default App;
