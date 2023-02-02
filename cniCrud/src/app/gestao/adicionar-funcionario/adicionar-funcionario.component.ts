import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FuncionarioObj } from '../model/funcionarios';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-adicionar-funcionario',
  templateUrl: './adicionar-funcionario.component.html',
  styleUrls: ['./adicionar-funcionario.component.css']
})
export class AdicionarFuncionarioComponent implements OnInit {

  form: FormGroup;
  temCadastro: boolean = false

  constructor(private formBuilder: FormBuilder,
    private service: FuncionariosService,
    private snackBar: MatSnackBar,
    private router: Router,
    private Actrouter: ActivatedRoute) {
    this.form = this.formBuilder.group({
      id: [''],
      nome: [''],
      email: [''],
      telefone: [''],
      cargo: [''],
      sede: [''],
      cpf: ['']
    });
    
  }

  ngOnInit(): void {
    const funcionario: FuncionarioObj = this.Actrouter.snapshot.data['funcionario'];

    if (funcionario && funcionario.nome && funcionario.cpf) {
      this.form.setValue({
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
        telefone: funcionario.telefone,
        cargo: funcionario.cargo,
        sede: funcionario.sede,
        cpf: funcionario.cpf
      });
      this.temCadastro = true
    }

  }

  onSubmit() {
    this.service.addFuncionario(this.form.value).subscribe(result => this.onSuccess(), error => this.onError());
  }

  private onSuccess() {
    this.snackBar.open('Funcionario salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao salvar Funcionario.', '', { duration: 5000 });
  }


  onCancel() {
    this.router.navigate(['gestao']);
  }
}
