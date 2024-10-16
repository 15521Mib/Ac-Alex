import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroPetsPage } from './cadastro-pets.page';

describe('CadastroPetsPage', () => {
  let component: CadastroPetsPage;
  let fixture: ComponentFixture<CadastroPetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
