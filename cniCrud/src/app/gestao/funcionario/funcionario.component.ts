import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { FuncionarioObj } from '../model/funcionarios';
import { FuncionariosService } from '../services/funcionarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalErroComponent } from 'src/app/componentes/modal-erro/modal-erro.component';

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
    private router: Router) {

    this.dadosFuncionarios = this.funcionariosServices.list()
      .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.');
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

  ngOnInit(): void {
  }
}
