package com.kong.assignment.data;

import com.kong.assignment.model.Branch;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BranchRepository extends MongoRepository<Branch, String> {

    Branch findBranchByBranchId(String branchId);
}