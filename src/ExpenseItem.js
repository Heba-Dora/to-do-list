import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const expenseDate = new Date(2022, 4, 2)
    const expenseItem = 'Car Insurance'
    const expensePrice = 269
  return (
    <div className='expense-item'>
        <div>{expenseDate.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expenseItem}</h2>
            <div className='expense-item__price'>${expensePrice}</div>
        </div>
    </div>
    )
}

export default ExpenseItem