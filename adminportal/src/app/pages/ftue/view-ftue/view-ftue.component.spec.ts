import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFtueComponent } from './view-ftue.component';

describe('ViewFtueComponent', () => {
  let component: ViewFtueComponent;
  let fixture: ComponentFixture<ViewFtueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFtueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFtueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
