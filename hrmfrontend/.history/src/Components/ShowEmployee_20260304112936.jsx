import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ShowEmployee = () => {

  const [employees, setEmployees] = useState([])

  // helper that can be reused in effect and in delete handler
  const loadEmployees = async () => {
    try {
      const result = await axios.get("http://localhost:8080/employees/findall")
      setEmployees(result.data)
    } catch (error) {
      console.error("Error fetching employees:", error)
    }
  }

  useEffect(() => {
    (async () => {
      await loadEmployees()
    })()
  }, [])

  const deleteEmployees = async (empId) => {
    try {
      await axios.delete(`http://localhost:8080/employees/deletebyid/${empId}`)
      loadEmployees()
    } catch (error) {
      console.error("Error deleting employee:", error)
    }
  }



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
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.empName}</td>
                <td>{employee.empAddress}</td>
                <td>{employee.empSalary}</td>
                <td>
                 <Link to={`/edit/${employee.empId}`} className='btn btn-success'>Edit</Link>
                  <button
                    className="btn btn-danger btn-sm"onClick={() => deleteEmployees(employee.empId)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ShowEmployee