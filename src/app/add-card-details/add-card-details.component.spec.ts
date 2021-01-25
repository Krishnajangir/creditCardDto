import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardDetailsComponent } from './add-card-details.component';

describe('AddCardDetailsComponent', () => {
  let component: AddCardDetailsComponent;
  let fixture: ComponentFixture<AddCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
