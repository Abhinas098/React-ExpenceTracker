import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";


const deleteExpense=()=>{
  let expense=document.querySelector('.item')
  let delt=document.querySelector('.expense-item')
  expense.remove(delt)
} 

const ExpenseItem =(props)=> {
  return (
    <div className="item">
    <Card className="expense-item">
      <ExpenseDate className='expense-item__date' date={props.Date} />
      <ExpenseDetails className='expense-item__description' title={props.Title} amount={props.Amount} />
      <button onClick={deleteExpense}>Delete</button>
    </Card>
    </div>
  );
}

export default ExpenseItem;
