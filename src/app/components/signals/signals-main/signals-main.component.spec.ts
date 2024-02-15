import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsMainComponent } from './signals-main.component';

describe('SignalsMainComponent', () => {
  let component: SignalsMainComponent;
  let fixture: ComponentFixture<SignalsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
