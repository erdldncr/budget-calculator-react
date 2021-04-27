import React from 'react'
import Item from './ExpenseItem'
import { MdDelete} from 'react-icons/md'
export default function ExpenseList({expenses,setExpenses}) {
    
    return (
        <>
      <ul className="list">
          {expenses.map(expense=>{
              return <Item key={expense.id} {...expense}/>
          })}
      </ul>
        {expenses.length>0&& <button className="btn" onClick={()=>{setExpenses([])}}>Clear Expenses <MdDelete  className='btn-icon' />  </button> }
        </>
    )
}
