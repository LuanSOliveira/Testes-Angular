import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { FuncionalidadesModule } from './modules/funcionalidades/funcionalidades.module';
import { DiretivasModule } from './modules/diretivas/diretivas.module';
import { CicloModule } from './modules/ciclo/ciclo.module';
import { FormularioModule } from './modules/formulario/formulario.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'funcionalidades', loadChildren: () => FuncionalidadesModule },
  { path: 'diretivas', loadChildren: () => DiretivasModule },
  { path: 'ciclo', loadChildren: () => CicloModule },
  { path: 'formulario', loadChildren: () => FormularioModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
