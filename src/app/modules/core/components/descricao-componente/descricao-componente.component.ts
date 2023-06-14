import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descricao-componente',
  templateUrl: './descricao-componente.component.html',
  styleUrls: ['./descricao-componente.component.scss']
})
export class DescricaoComponenteComponent {

  @Input() titulo:string = ''

}
