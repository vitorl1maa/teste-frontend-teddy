import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalRootComponent } from "../../../../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../../../../core/shared/components/modal/modal-header/modal-header.component";
import { ModalBodyComponent } from "../../../../../core/shared/components/modal/modal-body/modal-body.component";
import { ModalFooterComponent } from "../../../../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../../../../core/shared/components/button/button.component";
import { InputComponent } from "../../../../../core/shared/components/input/input.component";
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormClient } from '../../../interfaces/formClient.interface';

type FormField = { [key: string]: AbstractControl };

@Component({
  selector: 'app-modal-creat',
  imports: [CommonModule, ModalRootComponent, ModalHeaderComponent, ModalBodyComponent, ModalFooterComponent, ButtonComponent, InputComponent, ReactiveFormsModule],
  templateUrl: './modal-creat.component.html',
  styleUrl: './modal-creat.component.scss'
})
export class ModalCreatComponent {
  @Input() isModalOpen = false
  @Output() onClose = new EventEmitter<void>();
  @Output() createClient = new EventEmitter<FormClient>();

  modalTitle = 'Criar cliente:';
  modalButtonText = 'Criar cliente';
  form: FormGroup = new FormGroup<FormField>({});

  constructor(
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()
  }

  get formValue() {
    return this.form?.value;
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      salary: [0, Validators.required],
      companyValuation: [0, Validators.required]
    })
  }

  normalizeFormData() {
    const formData = { ...this.formValue }
    formData.salary = parseFloat(formData.salary.replace('R$', '').replaceAll('.', '').replace(',', '.').trim())
    formData.companyValuation = parseFloat(formData.companyValuation.replace('R$', '').replaceAll('.', '').replace(',', '.').trim())

    return formData
  }

  submit() {
    if (this.form.invalid) return;
    const formData: FormClient = this.normalizeFormData()
    this.createClient.emit(formData);
  }

}
