package com.kong.assignment.view;

import org.springframework.stereotype.Component;

@Component
public class EmployeeView {

    private String emp_id;

    private String emp_name;

    private String emp_email;

    private String emp_photo;

    private String branch_name;

    private String bank_name;

    public String getEmp_id() {
        return emp_id;
    }

    public void setEmp_id(String emp_id) {
        this.emp_id = emp_id;
    }

    public String getEmp_name() {
        return emp_name;
    }

    public void setEmp_name(String emp_name) {
        this.emp_name = emp_name;
    }

    public String getEmp_email() {
        return emp_email;
    }

    public void setEmp_email(String emp_email) {
        this.emp_email = emp_email;
    }

    public String getEmp_photo() {
        return emp_photo;
    }

    public void setEmp_photo(String emp_photo) {
        this.emp_photo = emp_photo;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public String getBank_name() {
        return bank_name;
    }

    public void setBank_name(String bank_name) {
        this.bank_name = bank_name;
    }
}