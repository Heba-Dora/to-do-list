import React from 'react'
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = React.useState('2022');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return(
            expense.date.getFullYear().toString() === filteredYear
        )
    })
  
  return (
    <div>
         <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses === 0 ? (<p>no expenses found</p>): (
             
                filteredExpenses.map((item, key)=>
                 <ExpenseItem
                 id={item.key}
                 title={item.title}
                 amount={item.amount}
                 date={item.date}
                 />
                )
              

        )}
        
       
    </div>
  )
}

export default Expenses