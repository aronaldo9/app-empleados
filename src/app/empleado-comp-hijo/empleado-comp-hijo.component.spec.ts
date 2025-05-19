import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoCompHijoComponent } from './empleado-comp-hijo.component';

describe('EmpleadoCompHijoComponent', () => {
  let component: EmpleadoCompHijoComponent;
  let fixture: ComponentFixture<EmpleadoCompHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmpleadoCompHijoComponent]
    });
    fixture = TestBed.createComponent(EmpleadoCompHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
