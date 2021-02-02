import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialResourcesComponent } from './special-resources.component';

describe('SpecialResourcesComponent', () => {
  let component: SpecialResourcesComponent;
  let fixture: ComponentFixture<SpecialResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
