import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulartrainingComponent } from './angulartraining.component';

describe('AngulartrainingComponent', () => {
  let component: AngulartrainingComponent;
  let fixture: ComponentFixture<AngulartrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulartrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulartrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
