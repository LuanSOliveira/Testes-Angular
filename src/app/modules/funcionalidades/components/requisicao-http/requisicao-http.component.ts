import { Component } from '@angular/core';
import { RequisicaoHttpService } from '../../services/requisicao-http.service';
import { IPessoas } from '../../interfaces/types-requisicao-http';

@Component({
  selector: 'app-requisicao-http',
  templateUrl: './requisicao-http.component.html',
  styleUrls: ['./requisicao-http.component.scss']
})
export class RequisicaoHttpComponent {

  endereco: string = '../../../../assets/RequisiçãoHttp.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/funcionalidades/components/requisicao-http'

  pessoas: IPessoas[] = []

  constructor (private requisicaoHttp: RequisicaoHttpService){}

  buscarPessoas(){
    this.requisicaoHttp.getPessoas().subscribe({
      next: (retornoAPI) => this.pessoas = retornoAPI
    })
  }
}
