import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaveSharesComponent } from './wave-shares.component';

describe('WaveSharesComponent', () => {
  let component: WaveSharesComponent;
  let fixture: ComponentFixture<WaveSharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaveSharesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaveSharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
