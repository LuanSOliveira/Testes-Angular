import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './modules/core/core.module';
import { FuncionalidadesModule } from './modules/funcionalidades/funcionalidades.module';
import { DiretivasModule } from './modules/diretivas/diretivas.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'funcionalidades', loadChildren: () => FuncionalidadesModule },
  { path: 'diretivas', loadChildren: () => DiretivasModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
