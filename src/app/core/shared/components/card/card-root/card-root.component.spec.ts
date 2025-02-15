import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRootComponent } from './card-root.component';

describe('CardRootComponent', () => {
  let component: CardRootComponent;
  let fixture: ComponentFixture<CardRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardRootComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
