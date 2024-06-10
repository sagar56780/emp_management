import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password:'',
    discription:''
  });

  // Step 4: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Step 5: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    axios.post("http://localhost:4000/employee",formData);
    window.alert('data submitted sucussfully')
    window.location.reload();
    setFormData({
      name: '',
      email: '',
      password:''
    })
    // You can process the data further, like sending it to a server
  };


 
  return (
    <main>
 <div className="form-container" onSubmit={handleSubmit}>
    <h2>Employee Registration</h2>
    <form id="employeeForm" >
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange}/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required value={formData.password} onChange={handleChange}/>
      <label htmlFor="discription" >Discription</label>
      <input type="text" id='discription' name="discription" required value={formData.discription} onChange={handleChange}/>
    
      <button type="submit">Submit</button>
      
    </form>
  </div>
    
    
    </main>
  )
}

export default AddEmployee