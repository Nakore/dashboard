import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerRegitrationComponent } from './farmer-regitration.component';

describe('FarmerRegitrationComponent', () => {
  let component: FarmerRegitrationComponent;
  let fixture: ComponentFixture<FarmerRegitrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerRegitrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerRegitrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
