import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperLinksComponent } from './helper-links.component';

describe('HelperLinksComponent', () => {
  let component: HelperLinksComponent;
  let fixture: ComponentFixture<HelperLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelperLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelperLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
