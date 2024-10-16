import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarPetsPage } from './alterar-pets.page';

describe('AlterarPetsPage', () => {
  let component: AlterarPetsPage;
  let fixture: ComponentFixture<AlterarPetsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarPetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
