package com.fullstack.hrmbackend.Repository;

import com.fullstack.hrmbackend.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
