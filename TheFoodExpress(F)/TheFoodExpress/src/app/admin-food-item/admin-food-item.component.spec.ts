import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoodItemComponent } from './admin-food-item.component';

describe('AdminFoodItemComponent', () => {
  let component: AdminFoodItemComponent;
  let fixture: ComponentFixture<AdminFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFoodItemComponent]
    });
    fixture = TestBed.createComponent(AdminFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
