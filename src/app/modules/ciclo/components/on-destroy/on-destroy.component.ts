import { Component } from '@angular/core';

interface IPessoas {
  nome: string,
  numero: string
}

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss']
})
export class OnDestroyComponent {

  endereco: string = '../../../../assets/OnDestroy.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/ciclo/components/on-destroy'

  pessoas: IPessoas[] = [
    {nome: 'João', numero: "1"},
    {nome: 'Maria', numero: "2"},
    {nome: 'José', numero: "3"},
  ]

  deletarPessoa(): void{
    if(this.pessoas.length > 0){
      this.pessoas.pop()
    }
    else{
      alert('Lista Vazia.')
    } 
  }

  resetarPessoa():void{
    this.pessoas = [
      {nome: 'João', numero: "1"},
      {nome: 'Maria', numero: "2"},
      {nome: 'José', numero: "3"},
    ]
  }

}
