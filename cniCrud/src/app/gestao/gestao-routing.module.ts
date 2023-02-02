import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';

const routes: Routes = [
  {path: '', component: FuncionarioComponent},
  {path: 'addFuncionario', component: AdicionarFuncionarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoRoutingModule { }
