import "./App.css";
import ExpenseItem from "./Components/ExpenceItem";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94,
      date: new Date(2022, 7, 14),
      LocationOfExpenditure: "Bathroom",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 7000,
      date: new Date(2023, 2, 12),
      LocationOfExpenditure: "Tv Showroom",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 500,
      date: new Date(2023, 2, 28),
      LocationOfExpenditure: "Vechicle",
    },
    {
      id: "e4",
      title: "New Desk ",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure: "Wooden",
    },
  ];

  return (
    <div>
      {expense.map((expense) => {
        return (
          <ExpenseItem
            title={expense.title}
            Date={(expense.date)}
            Amount={expense.amount}
            locationOfExpenditure={expense.LocationOfExpenditure}></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
