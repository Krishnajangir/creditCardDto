import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCardDetailsComponent } from './show-card-details.component';

describe('ShowCardDetailsComponent', () => {
  let component: ShowCardDetailsComponent;
  let fixture: ComponentFixture<ShowCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
