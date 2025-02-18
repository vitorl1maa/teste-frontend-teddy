import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client, ClientResponse } from '../../interfaces/client.interface';
import { ClientDataService } from '../../../../core/services/client-data-service/client-data.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  standalone: false,
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent implements OnInit {
  @Output() createClient = new EventEmitter<void>();

  clientData: ClientResponse | null = null;
  clientsSelected: Client[] = []


  constructor(
    private clientDataService: ClientDataService,

  ) { }

  ngOnInit(): void {
    this.clientDataService.clientJourney$.subscribe((data) => {
      this.clientData = data?.clientData
    })
  }

  handleSelect(client: Client) {
    const clientIndex = this.clientsSelected.findIndex(currentClient => currentClient.id === client.id)

    if (clientIndex === -1) {
      this.clientsSelected.push(client)
      this.clientDataService.updateClientJourneyData({ clientSelected: this.clientsSelected })
      return
    }

    this.clientsSelected.splice(clientIndex, 1)
    this.clientDataService.updateClientJourneyData({ clientSelected: this.clientsSelected })
  }

  isSelected(clientId: number) {
    const isClientSelected = this.clientsSelected.find(currentClient => currentClient.id === clientId)

    return isClientSelected
  }


  // addClient(client: ClientType): void {
  //   this.clientApiService.createClient(client).subscribe({
  //     next: (newClient) => {
  //       const currentClients = this.clientsSubject.value;
  //       this.clientsSubject.next([...currentClients, newClient]);
  //     },
  //     error: (err) => console.error('Erro ao adicionar cliente:', err)
  //   });
  // }

  // updateClient(clientId: number, client: ClientType): void {
  //   this.clientApiService.updateClient(clientId, client).subscribe({
  //     next: (updatedClient) => {
  //       const currentClients = this.clientsSubject.value;
  //       const updatedClients = currentClients.map(c =>
  //         c.id === clientId ? updatedClient : c
  //       );
  //       this.clientsSubject.next(updatedClients);
  //     },
  //     error: (err) => console.error('Erro ao atualizar cliente:', err)
  //   });
  // }

  // deleteClient(clientId: number): void {
  //   this.clientApiService.deleteClient(clientId).subscribe({
  //     next: () => {
  //       const currentClients = this.clientsSubject.value;
  //       const updatedClients = currentClients.filter(c => c.id !== clientId);
  //       this.clientsSubject.next(updatedClients);
  //     },
  //     error: (err) => console.error('Erro ao excluir cliente:', err)
  //   });
  // }

}