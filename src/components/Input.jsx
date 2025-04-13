import React, { useState } from 'react'




function Input({onAddExpense}) {

    const [values, setValues] = useState({
        name: '',
        details:'',
        category:'',
        amount:'',
        date:'',
    
        })

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
       e.preventDefault ();
       onAddExpense(values);
       setValues({
        name: '',
        details:'',
        category:'',
        amount:'',
        date:'',
       })
        console.log(values)
    }

  return (
    <div className='input'> 
            <form onSubmit={handleSubmit}> 
                <label htmlFor="expensedetails">expense details</label>
                <input type="text"placeholder='enter expense name' name='name'
                onChange={handleChange} required/>

                <input type="text"placeholder  =' enter expense description' name='details' 
                onChange={handleChange} required/>

                <input type="text"placeholder='enter expense category' name='category' 
                onChange={handleChange} required/>

                <input type="number"placeholder='enter expense amount' name='amount' 
                onChange={handleChange} required/>

                <input type="date"placeholder='mm/dd/yyyy' name='date' 
                onChange={handleChange} required/>

                <button type='submit'>submit</button>
            </form>
    </div>

   
    
  )
}

export default Input