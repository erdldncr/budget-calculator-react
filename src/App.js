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
const [charge,setCharge]=useState('')
const [amount,setAmount]=useState('')
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log('handle')
  const newItem={id:uuid(),charge,amount}
  setExpenses([...expenses,newItem])
}

  return (
    <>
      <Alert></Alert>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm 
        handleSubmit={handleSubmit}
        amount={amount}
        setAmount={setAmount}
        charge={charge} 
        setCharge={setCharge} />
        <ExpenseList setExpenses={setExpenses} expenses={expenses} />
      </main>
      <h1>
        Total Spending :{' '} 
        <span className="total">
      {expenses.reduce((total,item)=>total+item.amount,0)}
        </span>
      </h1>

    </>
  );
}

export default App;
