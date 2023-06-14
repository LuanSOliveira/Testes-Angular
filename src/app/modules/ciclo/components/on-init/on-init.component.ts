import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.scss']
})
export class OnInitComponent implements OnInit {

  nome:string = ''

  endereco: string = '../../../../assets/OnInit.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/ciclo/components/on-init'

  ngOnInit(): void {
    this.nome = 'João'
    console.log('nome alterado - OnInit')
  }

}
