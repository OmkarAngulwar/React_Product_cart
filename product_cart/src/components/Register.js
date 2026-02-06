 import React, { useState } from 'react'
 import './Register.css'
 const Register = () => {
    const [formData, setFormData]=useState({fname:'', lname:'', email:'', pass:'', conpass:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.pass!=formData.conpass){
            alert('Password and Confirm Password must be same');
        }else{
            alert('Registration Successful');
        }
        console.log(formData);
    }
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormData({...formData, [name]:value});
    }
  return (
    <div >
      <h1>Registeration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name : </label>
        <input type="text" name='fname' value={formData.fname} onChange={handleChange} 
required/>
        <br />
        <label>Last Name : </label>
        <input type="text" name='lname' value={formData.lname} onChange={handleChange} 
required/>
        <br />
        <label>Email : </label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} 
required/>
        <br />
        <label>Password : </label>
        <input type="password" name='pass' value={formData.pass} onChange={handleChange} 
required/>
        <br />
        <label>Confirm Password : </label>
        <input type="password" name='conpass' value={formData.conpass} 
onChange={handleChange} required/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
 }
export default Register;