import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelvetAnimationComponent } from './velvet-animation.component';

describe('VelvetAnimationComponent', () => {
  let component: VelvetAnimationComponent;
  let fixture: ComponentFixture<VelvetAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VelvetAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VelvetAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
