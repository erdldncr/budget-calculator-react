import React from 'react'
import Item from './ExpenseItem'
import { MdDelete} from 'react-icons/md'
export default function ExpenseList({expenses,setExpenses,removeItem,handleAlert,editItem}) {
    
    return (
        <>
      <ul className="list">
          {expenses.map(expense=>{
              return <Item   removeItem={removeItem} key={expense.id} editItem={editItem} {...expense}/>
          })}
      </ul>
        {expenses.length>0&& <button className="btn" onClick={()=>{ 
            handleAlert('success','EXPENSE LIST IS EMPTY')
           
            setExpenses([])
        
        }}>Clear Expenses <MdDelete  className='btn-icon' />  </button> }
        </>
    )
}
