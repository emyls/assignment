package com.kong.assignment.data;

import com.kong.assignment.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository extends MongoRepository<Employee, String> {

    Employee findEmployeeByEmployeeId(String employeeId);

    Employee findEmployeeByEmail(String email);
}
