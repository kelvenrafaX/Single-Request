import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientesComponent } from './add-clientes.component';

describe('AddClientesComponent', () => {
  let component: AddClientesComponent;
  let fixture: ComponentFixture<AddClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
