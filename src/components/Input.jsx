import React from 'react'

function Input() {
  return (<div className='input'> 
    <label htmlFor="expensedetails">expense details</label>
     <input type="text "placeholder='enter expense name' name='details' />

     <input type="text "placeholder=' enter expense description' name='details' />

     <input type="text "placeholder='enter expense category' name='category' />

     <input type="text "placeholder='enter expense amount' name='amount' />

     <input type="text "placeholder='mm/dd/yyyy' name='date' />

     <button type='submit'>submit</button>
     </div>
    
  )
}

export default Input