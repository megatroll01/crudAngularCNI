import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestaoRoutingModule } from './gestao-routing.module';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { AdicionarFuncionarioComponent } from './adicionar-funcionario/adicionar-funcionario.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { AppModulosModule } from '../app-modulos/app-modulos.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FuncionarioComponent,
    AdicionarFuncionarioComponent
  ],
  imports: [
    CommonModule,
    GestaoRoutingModule,
    AppModulosModule,
    ComponentesModule,
    ReactiveFormsModule
  ]
})
export class GestaoModule { }
