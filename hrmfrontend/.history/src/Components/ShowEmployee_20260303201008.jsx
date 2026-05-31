import React, { useEffect } from 'react'

export const ShowEmployee = () => {

  const[employees,setEmployees]=useState([])

  useEffect(()=>{
    
  }  ,[])

  const loadEmployees=async()=>{
    const result=await axios.get()
  }
  

