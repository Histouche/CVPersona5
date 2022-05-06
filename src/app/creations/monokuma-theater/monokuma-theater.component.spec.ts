import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonokumaTheaterComponent } from './monokuma-theater.component';

describe('MonokumaTheaterComponent', () => {
  let component: MonokumaTheaterComponent;
  let fixture: ComponentFixture<MonokumaTheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonokumaTheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonokumaTheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
