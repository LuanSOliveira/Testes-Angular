import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiretivasRoutingModule } from './diretivas-routing.module';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';
import { CoreModule } from '../core/core.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgForComponent } from './components/ng-for/ng-for.component';


@NgModule({
  declarations: [
    DiretivasComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgForComponent
  ],
  imports: [
    CommonModule,
    DiretivasRoutingModule,    
    CoreModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class DiretivasModule { }
