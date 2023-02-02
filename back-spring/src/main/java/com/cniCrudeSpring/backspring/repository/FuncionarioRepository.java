package com.cniCrudeSpring.backspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cniCrudeSpring.backspring.model.FuncionarioObj;

@Repository
public interface FuncionarioRepository extends JpaRepository<FuncionarioObj, Long> {
    
}
