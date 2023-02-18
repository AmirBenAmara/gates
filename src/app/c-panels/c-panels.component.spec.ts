import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPanelsComponent } from './c-panels.component';

describe('CPanelsComponent', () => {
  let component: CPanelsComponent;
  let fixture: ComponentFixture<CPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
