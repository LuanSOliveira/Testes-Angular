import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../services/servicos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  lista: string[] = []

  endereco: string = '../../../../assets/Serviços.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/funcionalidades/components/servicos'

  constructor(private servicoService: ServicosService) {}

  ngOnInit(): void {
    this.lista = this.servicoService.getNomes()
  }

}
