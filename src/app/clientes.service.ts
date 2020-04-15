import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClienteService {

  url: any;
  constructor(private http: HttpClient) {
    this.url  = `http://localhost:3000/clientes`;
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http
      .get<Cliente>(`${this.url}/${id}`);
  }

  getClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(this.url);
  }

  addCliente(cliente: Cliente): Observable<any>  {
    return this.http
      .post<any>(`${this.url}`, cliente);
  }

  removeCliente(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.url}/${id}`);
  }
}
