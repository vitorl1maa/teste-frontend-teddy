import { Component } from '@angular/core';
import { NavbarComponent } from "../../core/shared/components/navbar/navbar.component";

@Component({
  selector: 'app-clients-page',
  imports: [NavbarComponent],
  templateUrl: './clients-page.component.html',
  styleUrl: './clients-page.component.scss'
})
export class ClientsPageComponent { }
