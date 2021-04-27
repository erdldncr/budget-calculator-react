import React from 'react'
import { MdSend } from 'react-icons/md'

 const ExpenseForm = ({charge,setCharge,amount,setAmount,handleSubmit,edit}) => {
  
    return (
        <form onSubmit={handleSubmit} >
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input
                    onChange={(e)=>setCharge(e.target.value)}
                     type="text" className="form-control" id='charge' 
                     name='charge'
                     placeholder='e.g rent'
                     value={charge}
                     />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                    onChange={(e)=>{setAmount(e.target.value)}}
                    value={amount}
                     type="text" className="form-control" id='amount' 
                     name='amount'
                     placeholder='e.g $100'
                     />
                </div>
            </div>
            <button type="submit" className="btn">
               {edit?'edit':'submit'}  <MdSend className='btn-icon' />
            </button>
        </form>
    )
}
export default ExpenseForm