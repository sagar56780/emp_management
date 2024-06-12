import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewMore = () => {
    let [data,updateData]=useState({
        id:"",
        name:"",
        email:"",
        discription:""
    })

    let {id}=useParams();
    console.log(id);
    useEffect(() => {
        async function fetchData() {
          // You can await here
          const {data} = await axios.get(`http://localhost:4000/employee/${id}`);
          console.log(data);
          updateData(data);
          // ...
        }
        fetchData();
      },[]); 
    return(
        <> 
          
     <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Email</td>
          

        </tr>


      </thead>
      <tbody>
      
      {
       
            
            <tr >
            <td >{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.discription}</td>
            </tr>
          
      }
     
        
     
      </tbody>
     

     </table>
        </>
    )
  
}

export default ViewMore