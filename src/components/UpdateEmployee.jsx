import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateEmployee = () => {
    let {id}=useParams();
   
  const [formData, updateData] = useState({
 
    name: '',
    email: '',
    password:'',
    discription:''
  });
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const {data} = await axios.get(`http://localhost:4000/employee/${id}`);
      console.log(data);
      updateData(data);
      // ...
    }
    fetchData();
  }, []); 

  // Step 4: Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Step 5: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    axios.put(`http://localhost:4000/employee/${id}`,formData);
    window.alert('data updated sucussfully')
    window.location.reload();
    updateData({
      name: '',
      email: '',
      password:'',
      discription:''
    })
    // You can process the data further, like sending it to a server
  };


 
  return (
    <main>
 <div className="form-container" onSubmit={handleSubmit}>
    <h2>Employee Update</h2>
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

export default UpdateEmployee