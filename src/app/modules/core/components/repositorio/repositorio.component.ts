import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent {

  @Input() github:string = ''

  AbrirRepositorio():void {
    window.open(this.github, 'blank')
  }

}
