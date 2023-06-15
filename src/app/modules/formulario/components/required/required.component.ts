import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.scss']
})
export class RequiredComponent {

  endereco: string = '../../../../assets/Required.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/formulario/components/required'

  enviarFormulario(form: NgForm):void{
    if(form.valid){
      alert('O Formulário está VÁLIDO')
    }
    else{
      alert('O Formulário está INVÁLIDO')
    }
  }

}
