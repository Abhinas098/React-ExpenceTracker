import "./ExpenceItem.css";

function ExpenceItem(props) {
  // const expenseDate = new Date(2023, 2, 25);
  // const expenseTitle = "Car Insurance";
  // const expenseAmmount = 294.67;
  // const LocationOfExpenditure = 'Vehicles'
  return (
    <div className="expense-item">
      <div>{(props.Date).toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__description'>{props.locationOfExpenditure}</div>
      <div className="expense-item__price">Rs/-{props.Amount}</div>
    </div>
  );
}

export default ExpenceItem;
