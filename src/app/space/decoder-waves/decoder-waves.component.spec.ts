import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderWavesComponent } from './decoder-waves.component';

describe('DecoderWavesComponent', () => {
  let component: DecoderWavesComponent;
  let fixture: ComponentFixture<DecoderWavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoderWavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoderWavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
