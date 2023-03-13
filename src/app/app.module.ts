import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NomeCursoComponent } from './nome-curso/nome-curso.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { ButtonModalComponent } from './button-modal/button-modal.component';

import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ModalComponent } from './button-modal/modal/modal.component';
import { ComponentRowComponent } from './button-modal/modal/component-row/component-row.component'

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuSegundoComponent,
    DataBindingComponent,
    NomeCursoComponent,
    OutputPropertyComponent,
    CicloComponent,
    ButtonModalComponent,
    ModalComponent,
    ComponentRowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
