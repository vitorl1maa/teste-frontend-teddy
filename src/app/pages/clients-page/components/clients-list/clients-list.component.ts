import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Client, ClientResponse } from '../../interfaces/client.interface';
import { ClientDataService } from '../../../../core/services/client-data-service/client-data.service';
import { ClientService } from '../../../../core/services/client-service/client-service.service';
import { FormClient } from '../../interfaces/formClient.interface';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  standalone: false,
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent implements OnInit {
  @Output() getClientListEmit = new EventEmitter<void>();

  clientData: ClientResponse | null = null;
  clientsSelected: Client[] = []
  isCreateModalOpen: boolean = false;
  isUpdateModalOpen: boolean = false;
  isDeleteModalOpen: boolean = false;
  clientToDelete: any = ''
  clientToUpdate: any = ''
  formClient: FormClient = {
    name: '',
    salary: 0,
    companyValuation: 0
  }


  constructor(
    private clientService: ClientService,
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

  setClientUpdate(client: any) {
    this.clientToUpdate = client;
    this.isUpdateModalOpen = true
  }

  setClientDelete(client: any) {
    this.clientToDelete = client;
    this.isDeleteModalOpen = true
  }


  createClient(formClient: FormClient): void {
    this.clientService.createClient(formClient).subscribe({
      next: (res) => {
        this.isCreateModalOpen = false
        this.getClientListEmit.emit()
      },
      error: (err) => console.error('Erro ao adicionar cliente:', err)
    });
  }

  updateClient(client: FormClient): void {
    this.clientService.updateClient(this.clientToUpdate.id, client).subscribe({
      next: (res) => {
        this.isUpdateModalOpen = false
        this.getClientListEmit.emit()
      },
      error: (err) => console.error('Erro ao atualizar cliente:', err)
    });
  }

  deleteClient(): void {
    this.clientService.deleteClient(this.clientToDelete.id).subscribe({
      next: (res) => {
        this.isDeleteModalOpen = false
        this.getClientListEmit.emit()
      },
      error: (err) => console.error('Erro ao excluir cliente:', err)
    });
  }

}