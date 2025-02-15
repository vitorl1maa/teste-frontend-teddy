import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreatComponent } from './modal-creat.component';

describe('ModalCreatComponent', () => {
  let component: ModalCreatComponent;
  let fixture: ComponentFixture<ModalCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCreatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
