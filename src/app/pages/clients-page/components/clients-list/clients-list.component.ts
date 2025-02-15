import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardRootComponent } from '../../../../core/shared/components/card/card-root/card-root.component';
import { CardHeaderComponent } from '../../../../core/shared/components/card/card-header/card-header.component';
import { CardBoodyComponent } from '../../../../core/shared/components/card/card-boody/card-boody.component';
import { CardFooterComponent } from '../../../../core/shared/components/card/card-footer/card-footer.component';
import { IconComponent } from '../../../../core/shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-list',
  imports: [CommonModule, CardRootComponent, CardHeaderComponent, CardBoodyComponent, CardFooterComponent, IconComponent],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  @Output() editClient = new EventEmitter<void>();
  @Output() deleteClient = new EventEmitter<any>();
  @Input() clients: any[] = [];

  isSelected: { [key: number]: boolean } = {};

  toggleIcon(client: any) {
    this.isSelected[client] = !this.isSelected[client];
  }

  onEditClient(client: any) {
    this.editClient.emit(client);
  }

  onDeleteClient(client: any) {
    this.deleteClient.emit(client);
  }


}
