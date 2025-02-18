import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientResponse } from '../../../pages/clients-page/interfaces/client.interface';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = 'https://boasorte.teddybackoffice.com.br/users';

  constructor(private http: HttpClient) { }


  getClients(): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.baseUrl}`);
  }


  createClient(client: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, client);
  }


  updateClient(clientId: number, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${clientId}`, client);
  }


  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${clientId}`);
  }
}