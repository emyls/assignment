package com.kong.assignment.service;

import com.kong.assignment.data.BankRepository;
import com.kong.assignment.data.BranchRepository;
import com.kong.assignment.data.EmployeeRepository;
import com.kong.assignment.model.Bank;
import com.kong.assignment.model.Branch;
import com.kong.assignment.model.Employee;
import com.kong.assignment.view.EmployeeView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private BranchRepository branchRepository;

    @Autowired
    private BankRepository bankRepository;

    public EmployeeView getEmployee(String id) {

        EmployeeView employeeView = new EmployeeView();

        Employee employee = employeeRepository.findEmployeeByEmployeeId(id);

        if(employee != null) {

            Branch branch = branchRepository.findBranchByBranchId(employee.getBranchId());

            Bank bank = bankRepository.findBanksByBankId(employee.getBankId());

            employeeView.setEmp_id(employee.getEmployeeId());
            employeeView.setEmp_name(employee.getName());
            employeeView.setEmp_email(employee.getEmail());
            employeeView.setEmp_photo(employee.getPhoto());
            employeeView.setBranch_name(branch.getBranchName());
            employeeView.setBank_name(bank.getBankName());
        }

        return employeeView;
    }

    public Employee getEmployeeByEmail(String email) {

        Employee employee = employeeRepository.findEmployeeByEmail(email);

        return employee;
    }
}