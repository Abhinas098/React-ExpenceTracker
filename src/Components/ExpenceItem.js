import "./ExpenceItem.css";

function ExpenceItem() {
  const expenseDate = new Date(2023, 2, 25);
  const expenseTitle = "Car Insurance";
  const expenseAmmount = 294.67;
  const LocationOfExpenditure = 'Vehicles'

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
      </div>
      <div className='expense-item__description'>{LocationOfExpenditure}</div>
      <div className="expense-item__price">${expenseAmmount}</div>
    </div>
  );
}

export default ExpenceItem;
