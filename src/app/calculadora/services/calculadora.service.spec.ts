import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1+4 = 5', () => {
      const soma = service.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    });

  it('deve garantir que 1 - 4 = -3', () => {
    const sub = service.calcular(1,4, CalculadoraService.SUBTRACAO);
    expect(sub).toEqual(-3);
  });

  it('deve garantir que 1 / 4 = 0.25', () => {
    const div = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(div).toEqual(0.25);
  });

  it('deve garantir que 1 * 4 = 4', () => {
    const mult = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(mult).toEqual(4);
  });

  it('deve garantir que retornara 0 para uma operacao invalida', () => {
    const inv = service.calcular(1, 4, '%');
    expect(inv).toEqual(0);
  });


});
