import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements DoCheck {

  nome:string = 'João'

  endereco: string = '../../../../assets/DoCheck.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/ciclo/components/do-check'

  ngDoCheck(): void {
    console.log('nome alterado - DoCheck');    
  }

  mudarNome():void{
    this.nome === 'João' ? this.nome = 'Maria' : this.nome = 'João'
  }
}
