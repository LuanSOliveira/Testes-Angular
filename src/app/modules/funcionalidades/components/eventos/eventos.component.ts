import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  endereco: string = '../../../../assets/Eventos.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/funcionalidades/components/eventos'

  ExibirAlerta():void{
    alert('O Evento de "Click" foi realizado no botão!')
  }

}