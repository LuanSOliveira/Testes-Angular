import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arquivo-pdf',
  templateUrl: './arquivo-pdf.component.html',
  styleUrls: ['./arquivo-pdf.component.scss']
})
export class ArquivoPdfComponent {

  @Input() endereco:string = ''

  AbrirArquivo():void {
    window.open(this.endereco, 'blank')
  }

}
