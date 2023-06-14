import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicloRoutingModule } from './ciclo-routing.module';
import { CicloComponent } from './pages/ciclo/ciclo.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { OnInitComponent } from './components/on-init/on-init.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { OnDestroyComponent } from './components/on-destroy/on-destroy.component';
import { OnDestroyCardComponent } from './components/on-destroy-card/on-destroy-card.component';


@NgModule({
  declarations: [
    CicloComponent,
    OnChangesComponent,
    OnInitComponent,
    DoCheckComponent,
    OnDestroyComponent,
    OnDestroyCardComponent
  ],
  imports: [
    CommonModule,
    CicloRoutingModule,       
    CoreModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class CicloModule { }
