import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alerta-visual',
  templateUrl: './alerta-visual.component.html',
  styleUrls: ['./alerta-visual.component.scss']
})
export class AlertaVisualComponent {

  endereco: string = '../../../../assets/AlertasVisuais.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/formulario/components/alerta-visual'

  enviarFormulario(form: NgForm):void{
    if(form.valid){
      alert('O Formulário está VÁLIDO')
    }
    else{
      alert('O Formulário está INVÁLIDO')
    }
  }

}
