import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateBookComponent } from './edit-create-book.component';

describe('EditCreateBookComponent', () => {
  let component: EditCreateBookComponent;
  let fixture: ComponentFixture<EditCreateBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCreateBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
