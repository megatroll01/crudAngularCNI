import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { FuncionarioCashResolver } from './guards/funcionario-cash.resolver';

const routes: Routes = [
  {path: '', component: FuncionarioComponent},
  {path: 'addFuncionario', component: AdicionarFuncionarioComponent, resolve:{funcionario: FuncionarioCashResolver}},
  {path: 'EditFuncionario/:id', component: AdicionarFuncionarioComponent, resolve:{funcionario: FuncionarioCashResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoRoutingModule { }
