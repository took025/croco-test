import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsHeaderComponent } from './signals-header.component';

describe('SignalsHeaderComponent', () => {
  let component: SignalsHeaderComponent;
  let fixture: ComponentFixture<SignalsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
