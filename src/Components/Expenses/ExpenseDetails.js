import React from "react";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item">
        <div className="expense-item__price">Rs/-{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseDetails;
