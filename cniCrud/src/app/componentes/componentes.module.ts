import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalErroComponent } from './modal-erro/modal-erro.component';
import { AppModulosModule } from '../app-modulos/app-modulos.module';



@NgModule({
  declarations: [
    ModalErroComponent
  ],
  imports: [
    CommonModule,
    AppModulosModule
  ],
  exports: [ModalErroComponent]
})
export class ComponentesModule { }
