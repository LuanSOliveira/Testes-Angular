import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-propriedades-filho',
  templateUrl: './propriedades-filho.component.html',
  styleUrls: ['./propriedades-filho.component.scss']
})
export class PropriedadesFilhoComponent {
  @Input() nome:string = ''
}
