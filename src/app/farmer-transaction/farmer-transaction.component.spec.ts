import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerTransactionComponent } from './farmer-transaction.component';

describe('FarmerTransactionComponent', () => {
  let component: FarmerTransactionComponent;
  let fixture: ComponentFixture<FarmerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmerTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
