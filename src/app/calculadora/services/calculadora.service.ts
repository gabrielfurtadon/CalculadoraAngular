import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+'; // reaonly = constante. static = pode chamar sem fazer instancia da classe
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(n1: number, n2: number, operacao: string): number { // :number = retorno
    let resultado : number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = n1 + n2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = n1 - n2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = n1 / n2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = n1 * n2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
