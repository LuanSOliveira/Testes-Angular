import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrls: ['./ng-form.component.scss']
})
export class NgFormComponent {

  endereco: string = '../../../../assets/ngForm.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/formulario/components/ng-form'

  enviarFormulario(form: NgForm):void{
    console.log(form);    
  }

}
