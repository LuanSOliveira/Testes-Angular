import { Component } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.scss']
})
export class CicloComponent {

  nomeOnChanges: string = 'João'

  enderecoOnChanges: string = '../../../../assets/OnChanges.pdf'
  githubOnChanges: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/ciclo/components/on-changes'

  mudarNome():void{
    if(this.nomeOnChanges === 'João'){
      this.nomeOnChanges = 'Maria'
    }
    else{
      this.nomeOnChanges = 'João'
    }
  }
}
