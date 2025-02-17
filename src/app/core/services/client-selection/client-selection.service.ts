import { Injectable } from '@angular/core';
import { ClientType } from '../../../pages/clients-page/components/clients-list/types/client';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientSelectionService {
  private selectedClients: ClientType[] = [];
  private selectedClientsSubject = new BehaviorSubject<ClientType[]>(this.selectedClients);

  selectedClients$ = this.selectedClientsSubject.asObservable();


  toggleClientSelection(client: ClientType): void {
    const index = this.selectedClients.findIndex(c => c.id === client.id);
    if (index !== -1) {
      this.selectedClients.splice(index, 1);
    } else {
      this.selectedClients.push(client);
    }
    this.selectedClientsSubject.next(this.selectedClients);
  }

  removeClient(clientId: number): void {
    this.selectedClients = this.selectedClients.filter(client => client.id !== clientId);
    this.selectedClientsSubject.next(this.selectedClients);
  }

  clearSelectedClients(): void {
    this.selectedClients = [];
    this.selectedClientsSubject.next(this.selectedClients);
  }
}