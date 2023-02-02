import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FuncionarioObj } from '../model/funcionarios';
import { FuncionariosService } from '../services/funcionarios.service';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioCashResolver implements Resolve<FuncionarioObj> {

  constructor(private service: FuncionariosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FuncionarioObj> {
    if(route.params && route.params['id']){
      return this.service.loadById(route.params['id']);
    }
    return of({id: '', cpf: '', nome: '', email: '', telefone: '', cargo: '', sede: ''});
  }
}
