import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { FuncionarioObj } from '../model/funcionarios';
import { FuncionariosService } from '../services/funcionarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalErroComponent } from 'src/app/componentes/modal-erro/modal-erro.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  dadosFuncionarios: Observable<FuncionarioObj[]>;
  displayedColumns = ['nome', 'email', 'cargo', 'sede', 'telefone', 'actions'];


  constructor(
    private funcionariosServices: FuncionariosService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router) {

    this.dadosFuncionarios = this.funcionariosServices.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Funcionarios.');
          return of([])
        })
      );
  }

  carregarDados(){
    this.dadosFuncionarios = this.funcionariosServices.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar Funcionarios.');
          return of([])
        })
      );
  }

  onError(msg: string) {
    this.dialog.open(ModalErroComponent, {
      data: msg,
    });
  }

  addFuncionario() {
    this.router.navigate(['gestao/addFuncionario']);
  }

  onEdit(funcionario: FuncionarioObj) {
    this.router.navigate(['gestao/EditFuncionario', funcionario.id]);
  }
  onDelete(funcionario: FuncionarioObj){
    this.funcionariosServices.delete(funcionario.id).subscribe(() => {
      this.carregarDados();
      this.snackBar.open('Funcionario Excluido com Sucesso.', '', { duration: 5000, verticalPosition: 'top', horizontalPosition: 'center'});
    });
  }

  ngOnInit(): void {
  }
}
