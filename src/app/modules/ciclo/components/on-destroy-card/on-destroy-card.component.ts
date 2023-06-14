import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-on-destroy-card',
  templateUrl: './on-destroy-card.component.html',
  styleUrls: ['./on-destroy-card.component.scss']
})
export class OnDestroyCardComponent implements OnDestroy{

  @Input() nome: string = ''
  @Input() numero:string = ''

  ngOnDestroy(): void {
    console.log('card deletado - OnDestroy');
    
  }

}
