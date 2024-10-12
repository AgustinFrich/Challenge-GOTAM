import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAreaComponent } from './alta-area.component';

describe('AltaAreaComponent', () => {
  let component: AltaAreaComponent;
  let fixture: ComponentFixture<AltaAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
