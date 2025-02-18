import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientResponse } from '../../../pages/clients-page/interfaces/client.interface';
import { FormClient } from '../../../pages/clients-page/interfaces/formClient.interface';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private baseUrl = '/users';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(private http: HttpClient) { }


  getClients(): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.baseUrl}`);
  }


  createClient(client: FormClient): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, client);
  }


  updateClient(clientId: number, client: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${clientId}`, client);
  }


  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${clientId}`);
  }
}