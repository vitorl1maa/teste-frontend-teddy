import { Component, OnInit } from '@angular/core';
import { CardRootComponent } from "../../../../core/shared/components/card/card-root/card-root.component";
import { CardHeaderComponent } from "../../../../core/shared/components/card/card-header/card-header.component";
import { CardBoodyComponent } from "../../../../core/shared/components/card/card-boody/card-boody.component";
import { CardFooterComponent } from "../../../../core/shared/components/card/card-footer/card-footer.component";
import { IconComponent } from "../../../../core/shared/components/icon/icon.component";
import { ClientType } from '../clients-list/types/client';
import { ClientSelectionService } from '../../../../core/services/client-selection/client-selection.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../core/shared/components/button/button.component";

@Component({
  selector: 'app-clients-selected',
  imports: [CommonModule, CardRootComponent, CardHeaderComponent, CardBoodyComponent, CardFooterComponent, IconComponent, ButtonComponent],
  templateUrl: './clients-selected.component.html',
  styleUrl: './clients-selected.component.scss'
})
export class ClientsSelectedComponent implements OnInit {
  selectedClients: ClientType[] = [];

  constructor(private clientSelectionService: ClientSelectionService) { }

  ngOnInit(): void {
    this.clientSelectionService.selectedClients$.subscribe(clients => {
      this.selectedClients = clients;
    });
  }

  removeClient(clientId: number): void {
    this.clientSelectionService.removeClient(clientId);
  }

  clearSelectedClients(): void {
    this.clientSelectionService.clearSelectedClients();
  }
}
