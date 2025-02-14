import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconComponent } from "./core/shared/components/icon/icon.component";
import { ButtonComponent } from "./core/shared/components/button/button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IconComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-frontend-teddy';
}
