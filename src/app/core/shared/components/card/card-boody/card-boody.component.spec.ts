import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBoodyComponent } from './card-boody.component';

describe('CardBoodyComponent', () => {
  let component: CardBoodyComponent;
  let fixture: ComponentFixture<CardBoodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardBoodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBoodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
