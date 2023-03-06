import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeLogComponent } from './real-time-log.component';

describe('RealTimeLogComponent', () => {
  let component: RealTimeLogComponent;
  let fixture: ComponentFixture<RealTimeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
