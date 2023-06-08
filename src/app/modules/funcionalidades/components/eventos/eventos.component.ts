import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  endereco: string = '../../../../assets/Eventos.pdf'
  github: string = 'https://github.com/LuanSOliveira'

  ExibirAlerta():void{
    alert('O Evento de "Click" foi realizado no botão!')
  }

}