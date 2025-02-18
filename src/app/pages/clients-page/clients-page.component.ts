import { Component, OnInit } from '@angular/core';
import { CLIENTS_MOCK } from '../../core/mocks/clients.mock';
import { ClientsNavigation } from '../../core/enum/navigation.enum';
import { ClientService } from '../../core/services/client-service/client-service.service';
import { ClientDataService } from '../../core/services/client-data-service/client-data.service';

@Component({
  selector: 'app-clients-page',
  standalone: false,
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent implements OnInit {
  clients = CLIENTS_MOCK.clients;
  selectedView: ClientsNavigation = ClientsNavigation.CLIENTS;
  ClientsNavigation = ClientsNavigation;
  isLoading: boolean = false
  clientList: any = []
  showModalCreate = false;
  showModalEdit = false;
  showModalDelete = false;

  menuItems = [
    { label: 'Clientes', view: ClientsNavigation.CLIENTS },
    { label: 'Clientes Selecionados', view: ClientsNavigation.CLIENTSSELECTED },
  ];

  sideItems = [
    { icon: 'home-icon', label: 'Home' },
    { icon: 'client-icon', label: 'Clientes' },
    { icon: 'products-icon', label: 'Produtos' }
  ];

  constructor(
    private clientService: ClientService,
    private clientDataService: ClientDataService

  ) {

  }

  ngOnInit() {
    this.getClients()
  }

  getClients(): void {
    this.isLoading = true;

    this.clientService.getClients().subscribe({
      next: (response) => {
        this.clientDataService.updateClientJourneyData({
          clientData: response
        });
      },
      error: (err) => console.error('Erro ao carregar clientes:', err),
      complete: () => {
        this.isLoading = false;
      }
    });
  }


  changeView(view: ClientsNavigation | null) {
    if (view !== null) {
      this.selectedView = view;
    } else {

    }
  }
}

