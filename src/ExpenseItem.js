import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    const [update, setUpdate]= React.useState(props.title)

    const clickHandler = () => {
        setUpdate ('updated')
    }
    
  return (
    <div className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{update}</h2>
            <div className='expense-item__price'>${props.price}</div>
        </div>
        <button onClick={clickHandler}>update me</button>
    </div>
    )
}

export default ExpenseItem