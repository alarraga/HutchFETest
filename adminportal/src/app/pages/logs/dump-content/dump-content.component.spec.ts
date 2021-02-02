import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpContentComponent } from './dump-content.component';

describe('DumpContentComponent', () => {
  let component: DumpContentComponent;
  let fixture: ComponentFixture<DumpContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DumpContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
