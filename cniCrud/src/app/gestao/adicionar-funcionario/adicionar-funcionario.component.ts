import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {

  form: FormGroup;
  /* this.formBuilder.group({
    _id: [''],
    name: [''],
    email: [''],
    telefone: [''],
    cargo: [''],
    sede: [''],
    cpf: ['']
  }); */

  constructor(private formBuilder: FormBuilder,
    private service: FuncionariosService) {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      telefone: [''],
      cargo: [''],
      sede: [''],
      cpf: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.addFuncionario(this.form.value).subscribe(result => console.log(result));
  }

  onCancel() {

  }
}
