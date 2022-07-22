import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWeatherComponent } from './date-weather.component';

describe('DateWeatherComponent', () => {
  let component: DateWeatherComponent;
  let fixture: ComponentFixture<DateWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
