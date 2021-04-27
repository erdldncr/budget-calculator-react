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
      <ExpenseForm/>
      <ExpenseList/>

    </>
  );
}

export default App;
