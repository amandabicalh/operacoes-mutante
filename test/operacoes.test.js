// test/operacoes.test.js
const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Completa para Operações Aritméticas', () => {

  // === Bloco 1 ===
  test('soma', () => expect(soma(2,3)).toBe(5));
  test('subtração', () => expect(subtracao(5,2)).toBe(3));
  test('multiplicação', () => expect(multiplicacao(3,4)).toBe(12));
  test('divisão normal', () => expect(divisao(10,2)).toBe(5));
  test('divisão por zero lança erro', () => expect(() => divisao(5,0)).toThrow('Divisão por zero não é permitida.'));
  test('potência', () => expect(potencia(2,3)).toBe(8));
  test('raiz quadrada', () => expect(raizQuadrada(16)).toBe(4));
  test('raizQuadrada número negativo lança erro', () => expect(() => raizQuadrada(-4)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.'));
  test('restoDivisao', () => expect(restoDivisao(10,3)).toBe(1));
  test('fatorial normal', () => expect(fatorial(4)).toBe(24));
  test('fatorial 0', () => expect(fatorial(0)).toBe(1));
  test('fatorial 1', () => expect(fatorial(1)).toBe(1));
  test('fatorial negativo lança erro', () => expect(() => fatorial(-3)).toThrow('Fatorial não é definido para números negativos.'));

  // === Bloco 2 ===
  test('mediaArray normal', () => expect(mediaArray([10,20,30])).toBe(20));
  test('mediaArray vazio retorna 0', () => expect(mediaArray([])).toBe(0));
  test('somaArray', () => expect(somaArray([1,2,3])).toBe(6));
  test('maximoArray lança erro se vazio', () => expect(() => maximoArray([])).toThrow());
  test('maximoArray normal', () => expect(maximoArray([5,5,5])).toBe(5));
  test('minimoArray lança erro se vazio', () => expect(() => minimoArray([])).toThrow());
  test('minimoArray normal', () => expect(minimoArray([10,2,100])).toBe(2));
  test('valorAbsoluto', () => expect(valorAbsoluto(-5)).toBe(5));
  test('arredondar', () => expect(arredondar(9.8)).toBe(10));

  // === Bloco 3 ===
  test('isPar true', () => expect(isPar(100)).toBe(true));
  test('isPar false', () => expect(isPar(7)).toBe(false));
  test('isImpar true', () => expect(isImpar(7)).toBe(true));
  test('isImpar false', () => expect(isImpar(10)).toBe(false));
  test('calcularPorcentagem', () => expect(calcularPorcentagem(50,200)).toBe(100));
  test('aumentarPorcentagem', () => expect(aumentarPorcentagem(100,10)).toBeCloseTo(110));
  test('diminuirPorcentagem', () => expect(diminuirPorcentagem(100,10)).toBeCloseTo(90));
  test('inverterSinal', () => expect(inverterSinal(42)).toBe(-42));
  test('seno', () => expect(seno(0)).toBeCloseTo(0));
  test('cosseno', () => expect(cosseno(0)).toBeCloseTo(1));
  test('tangente', () => expect(tangente(0)).toBeCloseTo(0));
  test('logaritmoNatural', () => expect(logaritmoNatural(Math.E)).toBeCloseTo(1));
  test('logaritmoBase10', () => expect(logaritmoBase10(100)).toBeCloseTo(2));
  test('arredondarParaBaixo', () => expect(arredondarParaBaixo(5.9)).toBe(5));
  test('arredondarParaCima', () => expect(arredondarParaCima(5.1)).toBe(6));
  test('hipotenusa', () => expect(hipotenusa(3,4)).toBeCloseTo(5));
  test('grausParaRadianos', () => expect(grausParaRadianos(180)).toBeCloseTo(Math.PI));
  test('radianosParaGraus', () => expect(radianosParaGraus(Math.PI)).toBeCloseTo(180));

  // === Bloco 4 ===
  test('MDC', () => expect(mdc(10,5)).toBe(5));
  test('MMC', () => expect(mmc(10,5)).toBe(10));
  test('isPrimo true', () => expect(isPrimo(7)).toBe(true));
  test('isPrimo false', () => expect(isPrimo(4)).toBe(false));
  test('fibonacci seguro', () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(5)).toBe(5);
    expect(fibonacci(10)).toBe(55);
  });
  test('produtoArray', () => expect(produtoArray([2,3,4])).toBe(24));
  test('clamp', () => expect(clamp(5,0,10)).toBe(5));
  test('isDivisivel', () => {
    expect(isDivisivel(10,2)).toBe(true);
    expect(isDivisivel(10,3)).toBe(false);
    expect(() => isDivisivel(10,0)).toThrow('Divisão por zero não é permitida.');
  });
  test('celsiusParaFahrenheit', () => {
    expect(celsiusParaFahrenheit(0)).toBeCloseTo(32);
    expect(celsiusParaFahrenheit(100)).toBeCloseTo(212);
  });
  test('fahrenheitParaCelsius', () => {
    expect(fahrenheitParaCelsius(32)).toBeCloseTo(0);
    expect(fahrenheitParaCelsius(212)).toBeCloseTo(100);
  });
  test('inverso', () => {
    expect(inverso(4)).toBeCloseTo(0.25);
    expect(inverso(-2)).toBeCloseTo(-0.5);
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // === Bloco 5 ===
  test('areaCirculo', () => expect(areaCirculo(10)).toBeCloseTo(314.159, 3));
  test('areaRetangulo', () => expect(areaRetangulo(5,4)).toBe(20));
  test('perimetroRetangulo', () => expect(perimetroRetangulo(5,4)).toBe(18));
  test('isMaiorQue', () => {
    expect(isMaiorQue(10,5)).toBe(true);
    expect(isMaiorQue(5,10)).toBe(false);
  });
  test('isMenorQue', () => {
    expect(isMenorQue(5,10)).toBe(true);
    expect(isMenorQue(10,5)).toBe(false);
  });
  test('isEqual', () => {
    expect(isEqual(7,7)).toBe(true);
    expect(isEqual(7,8)).toBe(false);
  });
  test('medianaArray', () => {
    expect(medianaArray([1,2,3,4,5])).toBe(3);
    expect(medianaArray([1,2,3,4])).toBe(2.5);
    expect(() => medianaArray([])).toThrow('Array vazio não possui mediana.');
  });
  test('dobro', () => expect(dobro(10)).toBe(20));
  test('triplo', () => expect(triplo(10)).toBe(30));
  test('metade', () => expect(metade(20)).toBe(10));

});
