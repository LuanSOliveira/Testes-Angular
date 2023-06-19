import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPessoas } from '../interfaces/types-requisicao-http';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoHttpService {

  private urlAPI: string = 'https://643700b13e4d2b4a12e1541c.mockapi.io/testeshttp'

  constructor(private http: HttpClient) { }

  getPessoas(): Observable<IPessoas[]>{
    return this.http.get<IPessoas[]>(this.urlAPI)
  }
}
