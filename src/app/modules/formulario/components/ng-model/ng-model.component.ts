import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  
  endereco: string = '../../../../assets/ngForm.pdf'
  github: string = 'https://github.com/LuanSOliveira/Testes-Angular/tree/main/src/app/modules/formulario/components/ng-form'

  enviarFormulario(form: NgForm):void{
    console.log(form.controls);    
  }
}
