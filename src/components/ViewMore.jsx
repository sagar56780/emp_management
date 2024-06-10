import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewMore = () => {
    let [data,updateData]=useState({
        id:"",
        name:"",
        email:"",
        description:""
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
      }, []); 
    return(
        <> {id}
        </>
    )
  
}

export default ViewMore