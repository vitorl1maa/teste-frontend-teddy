import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardRootComponent } from '../../../../core/shared/components/card/card-root/card-root.component';
import { CardHeaderComponent } from '../../../../core/shared/components/card/card-header/card-header.component';
import { CardBoodyComponent } from '../../../../core/shared/components/card/card-boody/card-boody.component';
import { CardFooterComponent } from '../../../../core/shared/components/card/card-footer/card-footer.component';
import { IconComponent } from '../../../../core/shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../core/shared/components/button/button.component";
import { ClientSelectionService } from '../../../../core/services/client-selection/client-selection.service';
import { ClientType } from './types/client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-clients-list',
  imports: [CommonModule, CardRootComponent, CardHeaderComponent, CardBoodyComponent, CardFooterComponent, IconComponent, ButtonComponent],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  @Output() createClient = new EventEmitter<any>();
  @Output() editClient = new EventEmitter<void>();
  @Output() deleteClient = new EventEmitter<any>();
  @Input() clients: ClientType[] = [];


  constructor(private clientSelectionService: ClientSelectionService) { }

  toggleIcon(client: ClientType) {
    this.clientSelectionService.toggleClientSelection(client);
  }

  isSelected(clientId: number): Observable<boolean> {
    return this.clientSelectionService.selectedClients$.pipe(
      map(selectedClients => selectedClients.some(client => client.id === clientId))
    );
  }


  onCreateClient() {
    this.createClient.emit()
  }

  onEditClient(client: any) {
    this.editClient.emit(client);
  }

  onDeleteClient(client: any) {
    this.deleteClient.emit(client);
  }


}
