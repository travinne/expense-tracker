import React from 'react'
import Input from './Input'

function AddExpense({onAddExpense}) {
  return (
    <div className='addexpense'>
      <Input onAddExpense={onAddExpense}/>
    </div>
  )
}

export default AddExpense