package com.fullstack.hrmbackend.Service;

import com.fullstack.hrmbackend.Entity.Employee;
import com.fullstack.hrmbackend.Repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class EmployeeService {


    private final EmployeeRepository employeeRepository;

    public Employee save(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee findById(int empId) {
        return employeeRepository.findById(empId).orElseThrow(()-> new RuntimeException("Employee #Id is not found"));
    }

    public List<Employee> findAll(){
        return employeeRepository.findAll();
    }
 public Employee update(int empId, Employee employee) {

        Employee employee1 = this.findById(empId);
        employee1.setEmpName(employee.getEmpName());
        employee1.setEmpAddress(employee.getEmpAddress());
        employee1.setEmpSalary(employee.getEmpSalary());
        return employeeRepository.save(employee1);

 }
public void deleteById(int empId) {
        employeeRepository.deleteById(empId);

}


}
