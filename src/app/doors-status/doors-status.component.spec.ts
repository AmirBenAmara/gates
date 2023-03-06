import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorsStatusComponent } from './doors-status.component';

describe('DoorsStatusComponent', () => {
  let component: DoorsStatusComponent;
  let fixture: ComponentFixture<DoorsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorsStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
