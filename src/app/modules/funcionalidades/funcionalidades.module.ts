import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { FuncionalidadesRoutingModule } from './funcionalidades-routing.module';
import { FuncionalidadesComponent } from './pages/funcionalidades/funcionalidades.component';
import { InterpolacaoDadosComponent } from './components/interpolacao-dados/interpolacao-dados.component';
import { CoreModule } from '../core/core.module';
import { PropriedadesComponent } from './components/propriedades/propriedades.component';
import { PropriedadesFilhoComponent } from './components/propriedades-filho/propriedades-filho.component';
import { EventosComponent } from './components/eventos/eventos.component';


@NgModule({
  declarations: [
    FuncionalidadesComponent,
    InterpolacaoDadosComponent,
    PropriedadesComponent,
    PropriedadesFilhoComponent,
    EventosComponent
  ],
  imports: [
    CommonModule,
    FuncionalidadesRoutingModule,
    CoreModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class FuncionalidadesModule { }