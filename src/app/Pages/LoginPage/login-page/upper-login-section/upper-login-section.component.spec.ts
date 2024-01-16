import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperLoginSectionComponent } from './upper-login-section.component';

describe('UpperLoginSectionComponent', () => {
  let component: UpperLoginSectionComponent;
  let fixture: ComponentFixture<UpperLoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpperLoginSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpperLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
