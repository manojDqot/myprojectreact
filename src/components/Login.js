import React from 'react'

const Login = () => {
  return (
    <>

<div className='container card p-3 mt-2 register-container' >
            <h3 className='text-center'> login Form</h3>
            <form >
               
                 <div className="form-group">
                <label htmlFor="Email">Email </label>
                <input type="Email"  name="Email" required  className="form-control"/>
                </div>

                <div className="form-group">
                <label htmlFor="Password">Password </label>
                <input type="Password"  name="Password" required  className="form-control"/>
                </div>

                <button type='submit' className='btn btn-primary'>AllRegister</button>
            
            </form>
        </div>
    </>
  )
}

export default Login