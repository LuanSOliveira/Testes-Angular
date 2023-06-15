import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { CoreModule } from '../core/core.module';
import { RequiredComponent } from './components/required/required.component';
import { NgFormComponent } from './components/ng-form/ng-form.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { AlertaVisualComponent } from './components/alerta-visual/alerta-visual.component';


@NgModule({
  declarations: [
    FormularioComponent,
    RequiredComponent,
    NgFormComponent,
    NgModelComponent,
    AlertaVisualComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class FormularioModule { }
