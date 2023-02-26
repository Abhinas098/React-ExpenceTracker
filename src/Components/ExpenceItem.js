import "./ExpenceItem.css";
import ExpenseDate from './ExpenseDate.js';
import ExpenseDetails from "./ExpenseDetails";

function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.Date} />
      <ExpenseDetails title={props.Title} amount={props.Amount} />
    </div>
  );
}

export default ExpenceItem;
