package com.kong.assignment.controller;

import com.kong.assignment.service.EmployeeService;
import com.kong.assignment.view.EmployeeView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @RequestMapping("/employee/{id}")
    public EmployeeView getEmployee(@PathVariable("id")String id)
    {
       return employeeService.getEmployee(id);
    }


}