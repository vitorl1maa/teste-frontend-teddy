import { Component, EventEmitter, Output } from '@angular/core';
import { CardRootComponent } from '../../../../core/shared/components/card/card-root/card-root.component';
import { CardHeaderComponent } from '../../../../core/shared/components/card/card-header/card-header.component';
import { CardBoodyComponent } from '../../../../core/shared/components/card/card-boody/card-boody.component';
import { CardFooterComponent } from '../../../../core/shared/components/card/card-footer/card-footer.component';
import { IconComponent } from '../../../../core/shared/components/icon/icon.component';

@Component({
  selector: 'app-clients-list',
  imports: [CardRootComponent, CardHeaderComponent, CardBoodyComponent, CardFooterComponent, IconComponent],
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {
  @Output() editClient = new EventEmitter<void>();
  @Output() deleteClient = new EventEmitter<any>();

  client = { name: 'Eduardo', salary: 3500, companyValue: 120000 };

  onEditClient() {
    this.editClient.emit();
    console.log("editar")
  }

  onDeleteClient() {
    this.deleteClient.emit();
    console.log("ap")
  }
}
