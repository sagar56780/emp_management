import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

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



  return (
    
     <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          <td>Remove Employee</td>
          <td>Full details </td>
          <td>Update details</td>
          

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
            <td><NavLink to={`/viewMore/${val.id}`}><button>View More</button></NavLink></td>
            <td><NavLink to={`/updateEmployee/${val.id}`}><button>Update</button></NavLink></td>
            </tr> 
          
        
          )

        })
      }
     
        
     
      </tbody>
     

     </table>
  )
}

export default ViewAll