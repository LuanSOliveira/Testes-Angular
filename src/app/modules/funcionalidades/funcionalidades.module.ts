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
import { ServicosComponent } from './components/servicos/servicos.component';
import { RequisicaoHttpComponent } from './components/requisicao-http/requisicao-http.component';


@NgModule({
  declarations: [
    FuncionalidadesComponent,
    InterpolacaoDadosComponent,
    PropriedadesComponent,
    PropriedadesFilhoComponent,
    EventosComponent,
    ServicosComponent,
    RequisicaoHttpComponent
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
