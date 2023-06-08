import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-else',
  templateUrl: './ng-if-else.component.html',
  styleUrls: ['./ng-if-else.component.scss']
})
export class NgIfElseComponent {

  endereco: string = '../../../../assets/ngIfElse.pdf'
  github: string = 'https://github.com/LuanSOliveira'

  condicao: boolean = true

  AlterarCondicao():void{
    this.condicao = !this.condicao
  }

}
