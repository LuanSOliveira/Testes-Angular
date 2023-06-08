import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ArquivoPdfComponent } from './components/arquivo-pdf/arquivo-pdf.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArquivoPdfComponent,
    RepositorioComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ArquivoPdfComponent,
    RepositorioComponent,
    NavbarComponent
  ]
})
export class CoreModule { }
