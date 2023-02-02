package com.cniCrudeSpring.backspring.controller;

import java.util.List;

import org.springframework.boot.autoconfigure.info.ProjectInfoProperties.Build;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cniCrudeSpring.backspring.model.FuncionarioObj;
import com.cniCrudeSpring.backspring.repository.FuncionarioRepository;

import jakarta.persistence.Entity;

@RestController
@RequestMapping("/api/funcionarios")
public class FuncionarioController {

    private final FuncionarioRepository funcionarioRepository;

    public FuncionarioController(FuncionarioRepository funcionarioRepository) {
        this.funcionarioRepository = funcionarioRepository;
    }

    @GetMapping
    public @ResponseBody List<FuncionarioObj> list() {

        return funcionarioRepository.findAll();
    }

    @PostMapping
    public ResponseEntity create(@RequestBody FuncionarioObj funcionario) {
        return ResponseEntity.status(HttpStatus.CREATED).body(funcionarioRepository.save(funcionario));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FuncionarioObj> update(@PathVariable Long id, @RequestBody FuncionarioObj funcionario) {

        return funcionarioRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setNome(funcionario.getNome());
                    recordFound.setEmail(funcionario.getEmail());
                    recordFound.setCargo(funcionario.getCargo());
                    recordFound.setSede(funcionario.getSede());
                    recordFound.setTelefone(funcionario.getTelefone());
                    FuncionarioObj update = funcionarioRepository.save(recordFound);
                    return ResponseEntity.ok().body(update);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FuncionarioObj> findById(@PathVariable Long id) {
        return funcionarioRepository.findById(id)
                .map(recordFound -> ResponseEntity.ok().body(recordFound))
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return funcionarioRepository.findById(id)
                .map(recordFound -> {
                    funcionarioRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }

}
