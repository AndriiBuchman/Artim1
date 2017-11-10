import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectToolboxComponent } from './perfect-toolbox.component';

describe('PerfectToolboxComponent', () => {
  let component: PerfectToolboxComponent;
  let fixture: ComponentFixture<PerfectToolboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectToolboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectToolboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
