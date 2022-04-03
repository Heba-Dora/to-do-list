import React from 'react'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
        {
       props.items.map((item, key)=>
        <ExpenseItem
        id={item.key}
        title={item.title}
        price={item.price}
        date={item.date}
        />
       
       
       )
     } 
    </div>
  )
}

export default Expenses