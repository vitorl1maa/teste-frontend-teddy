import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/shared/components/button/button.component';
import { InputComponent } from '../../core/shared/components/input/input.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [InputComponent, ButtonComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

}
