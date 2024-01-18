import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerLoginSectionSmartPhonensComponent } from './lower-login-section-smart-phonens.component';

describe('LowerLoginSectionSmartPhonensComponent', () => {
  let component: LowerLoginSectionSmartPhonensComponent;
  let fixture: ComponentFixture<LowerLoginSectionSmartPhonensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowerLoginSectionSmartPhonensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LowerLoginSectionSmartPhonensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
