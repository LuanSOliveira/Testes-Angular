import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {

  endereco: string = '../../../../assets/ngIf.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/diretivas/components/ng-if'

  condicao: boolean = true

  AlterarCondicao():void{
    this.condicao = !this.condicao
  }

}
