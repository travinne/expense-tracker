import React, { useState } from 'react'



function Input() {

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
       e.preventDefault ()
        console.log(values)
    }

  return (
    <div className='input'> 
            <form onSubmit={handleSubmit}> 
                <label htmlFor="expensedetails">expense details</label>
                <input type="text"placeholder='enter expense name' name='name'
                onChange={(e) => handleChange(e)} required/>

                <input type="text"placeholder  =' enter expense description' name='details' 
                onChange={(e) => handleChange(e)} required/>

                <input type="text"placeholder='enter expense category' name='category' 
                onChange={(e) => handleChange(e)} required/>

                <input type="text"placeholder='enter expense amount' name='amount' 
                onChange={(e) => handleChange(e)} required/>

                <input type="text"placeholder='mm/dd/yyyy' name='date' 
                onChange={(e) => handleChange(e)} required/>

                <button type='submit'>submit</button>
            </form>
    </div>

   
    
  )
}

export default Input