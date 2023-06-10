import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  nomes: string[] = ['João', 'Maria', 'José']

  constructor() { }

  getNomes(): string[] {
    return this.nomes
  }
}
