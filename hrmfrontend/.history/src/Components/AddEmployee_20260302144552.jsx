import React,{use, useState} from 'react'
import axios from 'axios'


export const AddEmployee = () => {

    let navigate=use

    const[employee,setEmployee] = useState({empName:""
        ,empAddress:"",
        empSalary:""
    })
    
    const{empName,empAddress,empSalary}=employee;
    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
    
    e.preventDefault()
     await axios.post("http://localhost:8080/employees/save",employee)
    
    navigate("/")
    }
    
    
        return(
    <div>

     <h1>Add Employee</h1>
    </div>
  )
}

