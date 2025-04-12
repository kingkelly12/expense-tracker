import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Rent', amount: 1200 },
    { id: 2, name: 'Groceries', amount: 300 },
    { id: 3, name: 'Utilities', amount: 150 },
    { id: 4, name: 'Transportation', amount: 100 },
    { id: 5, name: 'Entertainment', amount: 200 }
  ])

  const [newExpense, setNewExpense] = useState(
    { name: '', amount: '' }
  )

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const addExpense = (event) => {
    event.preventDefault();
    if (newExpense.name && newExpense.amount && newExpense.date) {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          name: newExpense.name,
          amount: parseFloat(newExpense.amount),
          date: newExpense.date,
        },
      ]);
      setNewExpense({ name: '', amount: '', date: '' });
    }
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
}

export default App
