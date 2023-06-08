import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.scss']
})
export class NgIfElseComponent {

  endereco: string = '../../../../assets/ngIfElse.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/diretivas/components/ng-if-else'

  condicao: boolean = true

  AlterarCondicao():void{
    this.condicao = !this.condicao
  }

}
