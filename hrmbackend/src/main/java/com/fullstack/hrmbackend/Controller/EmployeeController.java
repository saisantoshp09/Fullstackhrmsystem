package com.fullstack.hrmbackend.Controller;


import com.fullstack.hrmbackend.Entity.Employee;
import com.fullstack.hrmbackend.Service.EmployeeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/employees")
@RequiredArgsConstructor
@Slf4j
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/save")
    public ResponseEntity<Employee> save(@RequestBody Employee employee)
    {
        log.info("@@@@@@Trying to save for Employee: " +employee.getEmpName());
        return ResponseEntity.ok(employeeService.save(employee));
    }

    @GetMapping("/findbyid/{empId}")

    public ResponseEntity<Employee> findById(@PathVariable int empId){
        return ResponseEntity.ok(employeeService.findById(empId));
    }

    @GetMapping("/findall")
    public ResponseEntity<List<Employee>> findAll(){
        return ResponseEntity.ok(employeeService.findAll());
    }
@PutMapping("/update/{empId}")
    public ResponseEntity<Employee> update(@PathVariable int empId,@RequestBody Employee employee){
        return ResponseEntity.ok(employeeService.update(empId,employee));
}
@DeleteMapping("/deletebyid/{empId}")
    public ResponseEntity<String> deleteById(@PathVariable int empId){
        employeeService.deleteById(empId);
        return ResponseEntity.ok("Delete Employee Successfully");
}
}
