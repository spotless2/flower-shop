import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingTheme1Component } from './wedding-theme-1.component';

describe('WeddingTheme1Component', () => {
  let component: WeddingTheme1Component;
  let fixture: ComponentFixture<WeddingTheme1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingTheme1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingTheme1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
