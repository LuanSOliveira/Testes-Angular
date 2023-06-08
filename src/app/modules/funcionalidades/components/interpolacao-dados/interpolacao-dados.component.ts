import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao-dados',
  templateUrl: './interpolacao-dados.component.html',
  styleUrls: ['./interpolacao-dados.component.scss']
})
export class InterpolacaoDadosComponent {

  primeira: string = 'João'
  segunda: string = 'Maria'
  terceira: string = 'José'

  endereco: string = '../../../../assets/InterpolacaoDeDados.pdf'
  github: string = 'https://github.com/LuanSOliveira'

}
