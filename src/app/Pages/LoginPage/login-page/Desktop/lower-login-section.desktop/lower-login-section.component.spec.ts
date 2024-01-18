import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerLoginSectionComponent } from './lower-login-section.component';

describe('LowerLoginSectionComponent', () => {
  let component: LowerLoginSectionComponent;
  let fixture: ComponentFixture<LowerLoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerLoginSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerLoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
