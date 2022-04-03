import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./ExpenseForm";

function App() {
  const expenses = [
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
  return (
    <div>
      <ExpenseForm/>
     {
       expenses.map((item, key)=>
        <ExpenseItem
        id={item.key}
        title={item.title}
        price={item.price}
        date={item.date}
        />
       
       
       )
     } 
   
    </div>
  );
}

export default App;


