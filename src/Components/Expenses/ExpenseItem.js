import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from "./ExpenseDetails";
import Card from "../UI/Card";

const ExpenseItem =(props)=> {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.Date} />
      <ExpenseDetails title={props.Title} amount={props.Amount} />
    </Card>
  );
}

export default ExpenseItem;
