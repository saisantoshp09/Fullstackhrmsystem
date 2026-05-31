import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddEmployee = () => {

  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
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

    await axios.post("http://localhost:8080/employees/save", employee)

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

export default AddEmployee