 import React, { useState } from 'react'
 import './Register.css'
 const Clinic = () => {
    const [formData, setFormData]=useState({name:'', email:'', phone:'', date:'', time:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(formData.phone.length!=10){
            alert('Phone Number should be of 10 digits');
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
    <div>
       <h1>Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Full Name : </label>
        <input type="text" name='name' value={formData.name} onChange={handleChange} 
required/>
        <br />
        <label>Email : </label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} 
required/>
        <br />
        <label>Phone Number : </label>
        <input type="number" name='phone' value={formData.phone} onChange={handleChange} 
required/>
        <br />
        <label>Appointment Date : </label>
        <input type="date" name='date' value={formData.date} onChange={handleChange} 
required/>
        <br />
        <label>Appointment Time : </label>
        <input type="time" name='time' value={formData.time} onChange={handleChange} 
required/>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
 }
export default Clinic;