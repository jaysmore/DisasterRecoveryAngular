import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTimecardComponent } from './delete-timecard.component';

describe('DeleteTimecardComponent', () => {
  let component: DeleteTimecardComponent;
  let fixture: ComponentFixture<DeleteTimecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTimecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
