import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

export const EditEmployee = () => {
const { empId } = useParams()
  let navigate = useNavigate()

  const [employee, setEmployee] = useState({
    empId: empId,
    empName: "",
    empAddress: "",
    empSalary: ""
  })

  const { empName, empAddress, empSalary } = employee

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    await axios.put(`http://localhost:8080/employees/update/${employee.empId}`, employee)

    navigate("/")
  }

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={onSubmit}>
        <div>
          Name:
          <input
            type="text"
            name="empName"
            value={empName}
            onChange={onInputChange}
          />
        </div>

        <div>
          Address:
          <input
            type="text"
            name="empAddress"
            value={empAddress}
            onChange={onInputChange}
          />
        </div>

        <div>
          Salary:
          <input
            type="text"
            name="empSalary"
            value={empSalary}
            onChange={onInputChange}
          />
        </div>

        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}

