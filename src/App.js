import React,{useState} from 'react'
import './App.css';
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import uuid from 'react-uuid'
const initialExpense=[
  {id:uuid(),charge:'rent',amount:1600},
  {id:uuid(),charge:'car payment',amount:400},
  {id:uuid(),charge:'creadit-card',amount:200}
]
 
function App() {


const [expenses,setExpenses]=useState(initialExpense)


  return (
    <>
      <Alert></Alert>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm/>
        <ExpenseList setExpenses={setExpenses} expenses={expenses} />
      </main>
      <h1>
        Total Spending :{' '} 
        <span className="total">
      {initialExpense.reduce((total,item)=>total+item.amount,0)}
        </span>
      </h1>

    </>
  );
}

export default App;
