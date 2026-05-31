import React, { useEffect } from 'react'

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

      </table>
    </div>
  </diV>
)