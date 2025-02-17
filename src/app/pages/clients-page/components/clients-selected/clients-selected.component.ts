import { Component } from '@angular/core';
import { CardRootComponent } from "../../../../core/shared/components/card/card-root/card-root.component";
import { CardHeaderComponent } from "../../../../core/shared/components/card/card-header/card-header.component";
import { CardBoodyComponent } from "../../../../core/shared/components/card/card-boody/card-boody.component";
import { CardFooterComponent } from "../../../../core/shared/components/card/card-footer/card-footer.component";
import { IconComponent } from "../../../../core/shared/components/icon/icon.component";

@Component({
  selector: 'app-clients-selected',
  imports: [CardRootComponent, CardHeaderComponent, CardBoodyComponent, CardFooterComponent, IconComponent],
  templateUrl: './clients-selected.component.html',
  styleUrl: './clients-selected.component.scss'
})
export class ClientsSelectedComponent {

}
