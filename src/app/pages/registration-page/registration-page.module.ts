import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageRoutingModule } from './registration-page-routing.module';
import { ButtonComponent } from '../../core/shared/components/button/button.component';
import { InputComponent } from '../../core/shared/components/input/input.component';
import { RegistrationPageComponent } from './registration-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegistrationPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistrationPageRoutingModule,
    InputComponent,
    ButtonComponent
  ]
})
export class RegistrationPageModule { }
