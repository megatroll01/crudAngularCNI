import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { FuncionarioObj } from '../model/funcionarios';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly API = '/api/funcionarios';

  constructor(private httpClient: HttpClient) { }

  list(){

    return this.httpClient.get<FuncionarioObj[]>(this.API)
    .pipe(
      tap(funcionarios => console.log(funcionarios))
    );
  }

  addFuncionario(funcionario: FuncionarioObj){
    
    return this.httpClient.post<FuncionarioObj>(this.API, funcionario).pipe(first());
  }
}
