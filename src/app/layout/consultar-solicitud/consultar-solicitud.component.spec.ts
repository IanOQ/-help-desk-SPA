import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSolicitudComponent } from './consultar-solicitud.component';

describe('ConsultarSolicitudComponent', () => {
  let component: ConsultarSolicitudComponent;
  let fixture: ComponentFixture<ConsultarSolicitudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarSolicitudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
