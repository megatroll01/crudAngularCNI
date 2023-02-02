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

  loadById(id: string){
    return this.httpClient.get<FuncionarioObj>(`${this.API}/${id}`);
  }

  addFuncionario(funcionario: FuncionarioObj){
    if(funcionario.id){
      return this.update(funcionario)
    }
    return this.criar(funcionario);
  }

  private criar(funcionario: FuncionarioObj){
    return this.httpClient.post<FuncionarioObj>(this.API, funcionario).pipe(first());
  }

  private update(funcionario: FuncionarioObj){
    return this.httpClient.put<FuncionarioObj>(`${this.API}/${funcionario.id}`, funcionario).pipe(first());
  }

  delete(id: string){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
