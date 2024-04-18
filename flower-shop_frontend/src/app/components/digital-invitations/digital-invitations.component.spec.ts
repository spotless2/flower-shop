import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalInvitationsComponent } from './digital-invitations.component';

describe('DigitalInvitationsComponent', () => {
  let component: DigitalInvitationsComponent;
  let fixture: ComponentFixture<DigitalInvitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalInvitationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
