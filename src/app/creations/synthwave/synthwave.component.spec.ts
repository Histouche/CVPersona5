import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthwaveComponent } from './synthwave.component';

describe('SynthwaveComponent', () => {
  let component: SynthwaveComponent;
  let fixture: ComponentFixture<SynthwaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthwaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthwaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
