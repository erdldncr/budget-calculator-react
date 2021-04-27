import React,{useEffect, useState} from 'react'
import './App.css';
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import uuid from 'react-uuid'

 
function App() {


const [expenses,setExpenses]=useState(JSON.parse(localStorage.getItem('expenses'))||[])
const [charge,setCharge]=useState('')
const [amount,setAmount]=useState('')
const[alert,setAlert]=useState({show:false})
const [edit,setEdit]=useState(false)
const [id,setId]=useState(0)
const handleAlert=(type,text)=>{
  setAlert({show:true,type,text})
  setTimeout(() => {
    setAlert({...alert,show:false})
  },3000);
}
const handleSubmit=(e)=>{
  e.preventDefault()
  if(charge!==''&&amount>0){
      if(edit){
        setExpenses(expenses.map(expense=>{
          return expense.id===id?{...expense,amount,charge,id}:expense
        }))
        setEdit(false)
        handleAlert('success','ITEM EDITTED')
      }else{
        setExpenses([...expenses,{id:uuid(),charge,amount}])
        handleAlert('success','ITEM ADDED TO THE EXPENSES')
      }

  
    setAmount('')
    setCharge('')
  
  }else{
    handleAlert('danger','Charge and Amount shouldn\'t be empty')
  }

}
const removeItem=(id)=>{
  setExpenses(expenses.filter(item=>item.id!==id))
  handleAlert('success','ITEM REMOVED FROM THE LIST')
}
const editItem=(id)=>{
  const item=expenses.find(item=>item.id===id)
  setEdit(true)
  setAmount(item.amount)
  setCharge(item.charge)
  setId(id)
}
useEffect((
  
)=>{localStorage.setItem('expenses',JSON.stringify(expenses))},[expenses])
  console.log(expenses)
  return (
    <>
      {alert.show&&<Alert {...alert} />}
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm 
        edit={edit}
        handleSubmit={handleSubmit}
        amount={amount}
        setAmount={setAmount}
        charge={charge} 
        setCharge={setCharge}
        />
        <ExpenseList setExpenses={setExpenses} expenses={expenses}  handleAlert={handleAlert}  removeItem={removeItem} editItem={editItem} />
      </main>
      <h1>
        Total Spending :{' '} 
        <span className="total">
      {expenses.reduce((total,item)=>total+(+item.amount),0)}
        </span>
      </h1>

    </>
  );
}

export default App;
