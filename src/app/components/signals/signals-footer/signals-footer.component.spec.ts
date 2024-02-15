import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsFooterComponent } from './signals-footer.component';

describe('SignalsFooterComponent', () => {
  let component: SignalsFooterComponent;
  let fixture: ComponentFixture<SignalsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
