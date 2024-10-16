import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroCuidadoresPage } from './cadastro-cuidadores.page';

describe('CadastroCuidadoresPage', () => {
  let component: CadastroCuidadoresPage;
  let fixture: ComponentFixture<CadastroCuidadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroCuidadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
