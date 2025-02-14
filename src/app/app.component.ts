import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationPageComponent } from "./pages/registration-page/registration-page.component";
import { ClientsPageComponent } from "./pages/clients-page/clients-page.component";
import { NavbarComponent } from "./core/shared/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistrationPageComponent, ClientsPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-frontend-teddy';
}
