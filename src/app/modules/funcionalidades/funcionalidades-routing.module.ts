import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionalidadesComponent } from './pages/funcionalidades/funcionalidades.component';

const routes: Routes = [
  {path: '', component: FuncionalidadesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionalidadesRoutingModule { }
