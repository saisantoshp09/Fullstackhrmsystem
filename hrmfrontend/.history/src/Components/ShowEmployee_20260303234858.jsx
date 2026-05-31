import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const ShowEmployee = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {

    const loadEmployees = async () => {
      try {
        const result = await axios.get("http://localhost:8080/employees/findall")
        setEmployees(result.data)
      } catch (error) {
        console.error("Error fetching employees:", error)
      }
    }

    loadEmployees()

  }, [])

  return (
    <div className='container'>
      <div className='row'>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
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
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}