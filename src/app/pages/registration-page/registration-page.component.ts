import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../core/shared/components/button/button.component';
import { InputComponent } from '../../core/shared/components/input/input.component';

@Component({
  selector: 'app-registration-page',
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent { }
