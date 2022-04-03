import React, {useState} from 'react'
import Expenses from "./Expenses";
import NewExpense from './NewExpense';

const dummy_expenses = [
  {
    id : 0,
    title: 'Car Insurance',
    date : new Date(2022, 4, 2),
    amount: 193,
  },
  {
    id : 1,
    title: 'Car color',
    date : new Date(2020, 1, 2),
    amount: 180,
  },
  {
    id : 2,
    title: 'Car Maintenance',
    date : new Date(2021, 12, 20),
    amount: 146,
  }
]

function App() {
  const [expenses, setExpenses]= useState(dummy_expenses)

  const expenseHandler = expense =>{
    setExpenses(prevExpense =>{
      return ([expense, ...prevExpense])
    })
  }
  
  return (
    <div>
      <NewExpense onAddExpense={expenseHandler}/>
      <Expenses items={expenses}/>
     
   
    </div>
  );
}

export default App;


