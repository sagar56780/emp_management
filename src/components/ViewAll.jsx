import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
  let [data,setdata]=useState([])
useEffect(()=>{
    
const fetchdata=async ()=>{
  const response= await axios.get('http://localhost:4000/employee');
  const {data}=response;
  setdata(data);


 
 }
 fetchdata();
},[])
console.log();
let handleRemove=(e)=>{
  let id=e.target.value;
  axios.delete(`http://localhost:4000/employee/${id}`).then(response=>{
    console.log('user deleted',response.data);
    window.location.reload();
  })
  .catch(error=>{
    console.log('Error deleting user',error);
  })

  
}
let fulldetail=(e)=>{
  e.preventDefault();
  console.log(e.target.value);
  let val=e.target.value;
  return(
    <tr >
    <td >{val.id}</td>
    <td>{val.name}</td>
    <td>{val.email}</td>
    <td><button value={val.id} onClick={handleRemove}>RemoveEmployee</button></td>
   
    </tr>
  
  )

}


  return (
    
     <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Remove Employee</td>
          

        </tr>


      </thead>
      <tbody>
      
      {
        data.map((val,index)=>{
          return(
            
            <tr key={index}>
            <td >{val.id}</td>
            <td>{val.name}</td>
            <td>{val.email}</td>
            <td><button value={val.id} onClick={handleRemove}>RemoveEmployee</button></td>
            <td><button onClick={fulldetail} value={val} >View more</button></td>
            </tr>
          
        
          )

        })
      }
     
        
     
      </tbody>
     

     </table>
  )
}

export default ViewAll