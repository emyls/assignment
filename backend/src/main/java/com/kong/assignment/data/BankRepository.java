package com.kong.assignment.data;

import com.kong.assignment.model.Bank;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BankRepository extends MongoRepository<Bank, String> {

    Bank findBanksByBankId(String bankId);
}