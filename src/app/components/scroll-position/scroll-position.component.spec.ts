import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollPositionComponent } from './scroll-position.component';

describe('ScrollPositionComponent', () => {
  let component: ScrollPositionComponent;
  let fixture: ComponentFixture<ScrollPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
