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

  constructor(private http: HttpClient) { }


  getClients(page: number, limit: number): Observable<ClientResponse> {
    return this.http.get<ClientResponse>(`${this.baseUrl}?page=${page}&limit=${limit}`);
  }


  createClient(client: FormClient): Observable<ClientResponse> {
    return this.http.post<ClientResponse>(`${this.baseUrl}`, client);
  }


  updateClient(clientId: number, client: FormClient): Observable<ClientResponse> {
    return this.http.patch<ClientResponse>(`${this.baseUrl}/${clientId}`, client);
  }

  deleteClient(clientId: number): Observable<string> {
    return this.http.delete(`${this.baseUrl}/${clientId}`, { responseType: 'text' });
  }
}