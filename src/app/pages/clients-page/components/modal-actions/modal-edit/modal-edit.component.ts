import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ModalRootComponent } from "../../../../../core/shared/components/modal/modal-root/modal-root.component";
import { ModalHeaderComponent } from "../../../../../core/shared/components/modal/modal-header/modal-header.component";
import { ModalBodyComponent } from "../../../../../core/shared/components/modal/modal-body/modal-body.component";
import { InputComponent } from "../../../../../core/shared/components/input/input.component";
import { ModalFooterComponent } from "../../../../../core/shared/components/modal/modal-footer/modal-footer.component";
import { ButtonComponent } from "../../../../../core/shared/components/button/button.component";
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormClient } from '../../../interfaces/formClient.interface';
import { Client } from '../../../interfaces/client.interface';

type FormField = { [key: string]: AbstractControl };

@Component({
  selector: 'app-modal-edit',
  imports: [CommonModule, ModalRootComponent, ModalHeaderComponent, ModalBodyComponent, InputComponent, ModalFooterComponent, ButtonComponent, ReactiveFormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrl: './modal-edit.component.scss'
})
export class ModalEditComponent {
  @Output() onClose = new EventEmitter<void>();
  @Output() editClient = new EventEmitter<FormClient>();
  @Input() clientData!: Client;
  @Input() isModalOpen = false;

  modalTitle = 'Editar cliente:';
  modalButtonText = 'Editar cliente';
  form: FormGroup = new FormGroup<FormField>({});


  constructor(
    private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createForm()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['clientData']) {
      this.setFormValues()
    }
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
    if (typeof formData.salary === 'string') {
      formData.salary = parseFloat(formData.salary.replace('R$', '').replaceAll('.', '').replace(',', '.').trim())
    }

    if (typeof formData.companyValuation === 'string') {
      formData.companyValuation = parseFloat(formData.companyValuation.replace('R$', '').replaceAll('.', '').replace(',', '.').trim())
    }

    return formData
  }


  setFormValues() {
    this.form.patchValue({
      name: this.clientData?.name,
      salary: this.clientData?.salary,
      companyValuation: this.clientData?.companyValuation
    });
  }

  submit() {
    if (this.form.invalid) return;
    const formData: FormClient = this.normalizeFormData()
    this.editClient.emit(formData);
  }

}
