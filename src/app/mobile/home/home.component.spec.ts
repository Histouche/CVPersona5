import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobileComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeMobileComponent;
  let fixture: ComponentFixture<HomeMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
