import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const Registration = () => {

const [inputField ,    SetInputField]=  useState({
    name : '',
    email : '',
    password : '',
    cpassword: '',
})

const [inputError ,    SetInputError]=  useState({
    nameErr : '',
    emailErr : '',
    passwordErr : '',
    cpasswordErr : '',
})


const  HandlerChange =(e)=>{
SetInputField({...inputField, [e.target.name]: e.target.value})
}

const SubmitBtn = (e)=>{
e.preventDefault()
    console.log(inputField)
    if(ValidateForm()){
        console.log("valiidddddddddddddddd")
    }
    else{
        console.log("invalid")

    }

    }
    
const ValidateForm =()=>{
let Formisvalid = true;
const emailRegex = new RegExp(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})+$/);
SetInputError({
    nameErr : '',
    emailErr : '',
    passwordErr : '',
    cpasswordErr : '',
})

if(inputField.name== ''){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,nameErr:'plese Enter Name'
    }))
}
if(inputField.email == ''){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,emailErr:'plese Enter Email'
    }))
}
if(inputField.email !=='' && !emailRegex.test(inputField.email)){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,emailErr:'plese Enter Valid Email'
    }))
}
if(inputField.password == ''){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,passwordErr:'plese Enter Passeord'
    }))
}
if(inputField.cpassword == ''){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,cpasswordErr:'plese Enter Confirm password'
    }))
}
if(inputField.name !== '' && inputField.password != inputField.cpassword){
    Formisvalid = false;
    SetInputError(prevState=>({
        ...prevState,cpasswordErr:'plese Enter Confirm password'
    }))
}
return Formisvalid
}

  return (
    <div className='container card p-3 mt-2 register-container' >
    <h3 className='text-center'> Regestration Form</h3>
    <form >
    {/* onSubmit={props.submit} */}
        <div className="form-group">
           <label htmlFor="name">name </label>
             <input type="text"  name="name" required  value={inputField.name} onChange={HandlerChange}  className="form-control"/>
        {
            inputError.nameErr.length > 0 && <span className='error'>{inputError.nameErr}</span>
        }
        
        </div>

         <div className="form-group">
        <label htmlFor="Email">Email </label>
        <input type="Email"  name="email"  required  value={inputField.email} onChange={HandlerChange}  className="form-control"/>
        {
            inputError.emailErr.length > 0 && <span className='error'>{inputError.emailErr}</span>
        }
        </div>

        <div className="form-group">
        <label htmlFor="Password">Password </label>
        <input type="Password"  name="password"  value={inputField.password} onChange={HandlerChange}   required  className="form-control"/>
        {
            inputError.passwordErr.length > 0 && <span className='error'>{inputError.passwordErr}</span>
        }
        </div>

        <div className="form-group">
        <label htmlFor="rePassword">Repassword </label>
        <input type="Password"  name="cpassword"  value={inputField.cpassword} onChange={HandlerChange}   required  className="form-control"/>
        {
            inputError.cpasswordErr.length > 0 && <span className='error'>{inputError.cpasswordErr}</span>
        }
        </div>


        <button type='submit' onClick={SubmitBtn} className='btn btn-primary'>AllRegister</button>
    
    </form>
</div>
  )
}

export default Registration