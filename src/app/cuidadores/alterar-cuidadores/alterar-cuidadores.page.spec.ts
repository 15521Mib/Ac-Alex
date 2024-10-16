import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarCuidadoresPage } from './alterar-cuidadores.page';

describe('AlterarCuidadoresPage', () => {
  let component: AlterarCuidadoresPage;
  let fixture: ComponentFixture<AlterarCuidadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarCuidadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
