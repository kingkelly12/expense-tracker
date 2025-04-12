import { useState } from 'react'
import './App.css'

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Rent', description: 'rent', category: 'bill', amount: 1200 },
    { id: 2, name: 'Groceries', description: 'food stuff', category: 'bill', amount: 300 },
    { id: 3, name: 'Utilities', description: 'shopping', category: 'bill', amount: 150 },
    { id: 4, name: 'Transport', description: 'fuel', category: 'bill', amount: 100 },
    { id: 5, name: 'Entertainment', description: 'internet & tv', category: 'bill', amount: 200 }
  ])

  const [newExpense, setNewExpense] = useState(
    { name: '', amount: '', description: '', category: '', date: '' }
  )

  const [searchTerm, setSearchTerm] = useState('');

  
  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
};


export default App;
