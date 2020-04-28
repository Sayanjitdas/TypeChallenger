import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeboxComponent } from './typebox.component';

describe('TypeboxComponent', () => {
  let component: TypeboxComponent;
  let fixture: ComponentFixture<TypeboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
