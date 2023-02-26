import "./App.css";
import ExpenseItem from "./Components/ExpenceItem";

function App() {
  const expense = [
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

  return (
    <div>
      {expense.map((expense) => {
        return (
          <ExpenseItem
            Title={expense.title}
            Date={(expense.date)}
            Amount={expense.amount}></ExpenseItem>
        );
      })}
    </div>
  );
}

export default App;
