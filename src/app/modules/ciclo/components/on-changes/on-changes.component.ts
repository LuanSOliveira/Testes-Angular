import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnChanges {

  @Input() nome: string = 'João'

  ngOnChanges(): void {
    console.log('nome alterado - OnChanges')
  }
}
