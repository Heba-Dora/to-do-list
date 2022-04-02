import ExpenseItem from "./ExpenseItem";

function App() {
  const expenses = [
    {
      id : 0,
      title: 'Car Insurance',
      Date : new Date(2022, 4, 2),
      price: 193,
    },
    {
      id : 0,
      title: 'Car Insurance',
      Date : new Date(2022, 4, 2),
      price: 193,
    },
    {
      id : 0,
      title: 'Car Insurance',
      Date : new Date(2022, 4, 2),
      price: 193,
    }
  ]
  return (
    <div className="App">
     {
       expenses.map((item)=>
        <ExpenseItem
        title={item.title}
        price={item.price}
        data={item.price}
        />
       
       
       )
     } 
   
    </div>
  );
}

export default App;
