import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePartComponent } from './youtube-part.component';

describe('YoutubePartComponent', () => {
  let component: YoutubePartComponent;
  let fixture: ComponentFixture<YoutubePartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
