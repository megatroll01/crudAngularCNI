package com.cniCrudeSpring.backspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cniCrudeSpring.backspring.model.funcionario;

@Repository
public interface FuncionarioRepository extends JpaRepository<funcionario, Long> {
    
}
