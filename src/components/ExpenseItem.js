import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

export default function ExpenseItem({id,charge,amount,removeItem,editItem}) {
    return (
        <li className='item'>
            <div className="info">
                <span className="expense">{charge} </span>
                <span className="amount">${amount}</span>
            </div>
            <div>
            <button onClick={()=>editItem(id)} className="edit-btn" aria-label='edit button'> 
                 <MdEdit/>
            </button>
            <button onClick={()=>removeItem(id)} className="clear-btn" aria-label='delete button'> 
                 <MdDelete/>
            </button>
            </div>
        </li>
    )
}
