import { Component } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.scss']
})
export class PropriedadesComponent {

  endereco: string = '../../../../assets/Propriedades.pdf'
  github: string = 'https://github.com/LuanSOliveira'

  nomeFilho:string = 'Componente Filho'

}
