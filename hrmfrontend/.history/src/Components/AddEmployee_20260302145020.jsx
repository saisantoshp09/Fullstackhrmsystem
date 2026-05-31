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
        <div className='row'>
            <div> 
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    Name<input type='text' name='empName' value={empName} onChange={(e)=>onInputChange(e)} className='form-control'/>
                </div>
                <div className='mb-3'>
                    Address<input type='text' name='empAddress' value={empAddress} onChange={(e)=>onInputChange(e)} className='form-control'/>
                </div>
                <div className='mb-3'>
                    Salary<input type='text' name='empSalary' value={empSalary} onChange={(e)=>onInputChange(e)} className='form-control'/>
                </div>
                <button type='submit' className='Success'>Add Employee</button>
            </form>
            </div>
        </div>
    </div>
  )
}

