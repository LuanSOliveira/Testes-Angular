import { Component } from '@angular/core';

interface IPessoas {
  nome: string,
  numero: string
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})

export class NgForComponent {
  
  endereco: string = '../../../../assets/ngFor.pdf'
  github: string = 'https://github.com/LuanSOliveira'

  pessoas: IPessoas[] = [
    {nome: 'João', numero: "1"},
    {nome: 'Maria', numero: "2"},
    {nome: 'José', numero: "3"},
  ]
}
