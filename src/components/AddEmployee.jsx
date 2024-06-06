import React from 'react';
import axios from 'axios';

const AddEmployee = () => {    
 
  return (

    <main>
 <div className="form-container">
    <h2>Employee Registration</h2>
    <form id="employeeForm" action='http://localhost:4000/employee' method='post'>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required/>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required/>
      <button type="submit">Submit</button>
    </form>
  </div>
    
    
    </main>
  )
}

export default AddEmployee