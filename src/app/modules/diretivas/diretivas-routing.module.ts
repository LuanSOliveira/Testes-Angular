import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiretivasComponent } from './pages/diretivas/diretivas.component';

const routes: Routes = [
  {path: '', component: DiretivasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiretivasRoutingModule { }
