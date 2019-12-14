import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorViewComponent } from './mentor-view.component';

describe('MentorViewComponent', () => {
  let component: MentorViewComponent;
  let fixture: ComponentFixture<MentorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
