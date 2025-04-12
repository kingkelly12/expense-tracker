import React, { Component } from 'react'
import { useState } from 'react';
import './App.css';


  const addExpense = (event) => {
    event.preventDefault();
    if (newExpense.name && newExpense.description && newExpense.category && newExpense.amount && newExpense.date) {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          name: newExpense.name,
          description: newExpense.description,
          category: newExpense.category,
          amount: parseFloat(newExpense.amount),
          date: newExpense.date,
        },
      ]);
      setNewExpense({ name: '', description: '', category: '', amount: '', date: '' });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Expense Name"
        value={expense.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Enter Expense Description"
        value={expense.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="amount"
        placeholder="Enter Expense Amount"
        value={expense.amount}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        placeholder="Enter Expense Date"
        value={expense.date}
        onChange={handleChange}
        />
      <button type="submit">Add Expense</button>
    </form>
  );
;


export default AddExpense;
