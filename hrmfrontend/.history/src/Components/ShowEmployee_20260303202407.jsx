import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ShowEmployee = () => {

  const[employees,setEmployees]=useState([])

  useEffect(()=>{
    loadEmployees()
  }  ,[])

  const loadEmployees=async()=>{
    const result=await axios.get("http://localhost:8080/employees/findall")
    setEmployees(result.data)
  }
  

return(
  <diV className='container'>

    <div className='row'>
      <table className='table-table-striped'>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.salary}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </diV>
)
}