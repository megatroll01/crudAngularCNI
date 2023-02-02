package com.cniCrudeSpring.backspring.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class FuncionarioObj {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(length = 14, nullable = false)
    private String cpf;

    @Column(length = 200, nullable = false)
    private String nome;
    
    @Column(length = 200, nullable = false)
    private String email;
    
    @Column(length = 15, nullable = false)
    private String telefone;
    
    @Column(length = 200, nullable = false)
    private String cargo;
    
    @Column(length = 50, nullable = true)
    private String sede;


}
