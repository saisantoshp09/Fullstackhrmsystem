import React,{useState} from 'react'


export const AddEmployee = () => {

    const[employee,setEmployee] = useState({empName:""
        ,empAddress:"",
        empSalary:""
    })
    
    const{empName,empAddress,empSalary}=employee;
    const onInputChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value})
    }
    const onSubmit=async(e)=>{
    return(
    <div>

     <h1>Add Employee</h1>
    </div>
  )
}

