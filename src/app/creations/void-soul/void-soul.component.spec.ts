import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidSoulComponent } from './void-soul.component';

describe('VoidSoulComponent', () => {
  let component: VoidSoulComponent;
  let fixture: ComponentFixture<VoidSoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoidSoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidSoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
