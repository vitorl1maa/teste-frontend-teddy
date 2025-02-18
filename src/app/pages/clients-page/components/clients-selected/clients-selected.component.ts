import { Component } from '@angular/core';
import { Client } from '../../interfaces/client.interface';
import { ClientDataService } from '../../../../core/services/client-data-service/client-data.service';

@Component({
  selector: 'app-clients-selected',
  templateUrl: './clients-selected.component.html',
  standalone: false,
  styleUrl: './clients-selected.component.scss'
})
export class ClientsSelectedComponent {

  clientsSelected: Client[] = []



  constructor(
    private clientDataService: ClientDataService,

  ) { }

  ngOnInit(): void {
    this.clientDataService.clientJourney$.subscribe((data) => {
      this.clientsSelected = data?.clientSelected || []
    })
  }

  clearAllClients() {
    this.clientsSelected = []
    this.clientDataService.updateClientJourneyData({
      clientSelected: []
    })
  }

  unSelected(clientId: number) {
    const clientIndex = this.clientsSelected.findIndex(currentClient => currentClient.id === clientId)
    this.clientsSelected.splice(clientIndex, 1)
    this.clientDataService.updateClientJourneyData({ clientSelected: this.clientsSelected })
  }

}
