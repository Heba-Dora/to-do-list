import React, {useState} from 'react'
import Expenses from "./Expenses";
import NewExpense from './NewExpense';

const dummy_expenses = [
  {
    id : 0,
    title: 'Car Insurance',
    date : new Date(2022, 4, 2),
    price: 193,
  },
  {
    id : 0,
    title: 'Car Insurance',
    date : new Date(2022, 4, 2),
    price: 193,
  },
  {
    id : 0,
    title: 'Car Insurance',
    date : new Date(2022, 4, 2),
    price: 193,
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


