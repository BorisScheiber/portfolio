import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNavOverlayComponent } from './mobile-nav-overlay.component';

describe('MobileNavOverlayComponent', () => {
  let component: MobileNavOverlayComponent;
  let fixture: ComponentFixture<MobileNavOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileNavOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
