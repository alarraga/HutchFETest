import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFusionComponent } from './view-fusion.component';

describe('ViewFusionComponent', () => {
  let component: ViewFusionComponent;
  let fixture: ComponentFixture<ViewFusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFusionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
