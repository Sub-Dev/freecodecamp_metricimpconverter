const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

  test('convertHandler deve ler corretamente uma entrada de número inteiro.', function () {
    assert.equal(convertHandler.getNum('10kg'), 10);
  });

  test('convertHandler deverá ler corretamente a entrada de números decimais.', function () {
    assert.equal(convertHandler.getNum('10.5kg'), 10.5);
  });

  test('convertHandler deverá ler corretamente a entrada de frações.', function () {
    assert.equal(convertHandler.getNum('3/2kg'), 1.5);
  });

  test('convertHandler deverá ler corretamente a entrada de frações com decimais.', function () {
    assert.approximately(convertHandler.getNum('3.2/2kg'), 1.6, 0.00001);
  });

  test('convertHandler deve retornar corretamente um erro em uma dupla fração (por exemplo, 3/2/3).', function () {
    assert.equal(convertHandler.getNum('3/2/3kg'), 'invalid number');
  });

  test('convertHandler deverá apresentar corretamente como padrão uma entrada numérica de 1 quando nenhuma entrada numérica for fornecida.', function () {
    assert.equal(convertHandler.getNum('kg'), 1);
  });

  test('convertHandler deverá ler corretamente unidade de entrada válida.', function () {
    assert.equal(convertHandler.getUnit('10kg'), 'kg');
    assert.equal(convertHandler.getUnit('10L'), 'L');
    assert.equal(convertHandler.getUnit('10mi'), 'mi');
  });

  test('convertHandler deverá retornar corretamente um erro para uma unidade de entrada inválida.', function () {
    assert.equal(convertHandler.getUnit('10g'), 'invalid unit');
  });

  test('convertHandler deverá retornar corretamente a unidade para cada unidade de entrada válida.', function () {
    assert.equal(convertHandler.getReturnUnit('gal'), 'L');
    assert.equal(convertHandler.getReturnUnit('L'), 'gal');
    assert.equal(convertHandler.getReturnUnit('mi'), 'km');
    assert.equal(convertHandler.getReturnUnit('km'), 'mi');
    assert.equal(convertHandler.getReturnUnit('lbs'), 'kg');
    assert.equal(convertHandler.getReturnUnit('kg'), 'lbs');
  });

  test('convertHandler deverá retornar corretamente a unidade em string estendida para cada unidade de entrada válida.', function () {
    assert.equal(convertHandler.getString(2, 'mi', 3.21868, 'km'), '2 miles converts to 3.21868 kilometers');
  });

  test('convertHandler deve converter corretamente gal para L.', function () {
    assert.approximately(convertHandler.convert(1, 'gal'), 3.78541, 0.00001);
  });

  test('convertHandler deve converter corretamente L para gal.', function () {
    assert.approximately(convertHandler.convert(1, 'L'), 0.26417, 0.00001);
  });

  test('convertHandler deve converter corretamente mi para km.', function () {
    assert.approximately(convertHandler.convert(1, 'mi'), 1.60934, 0.00001);
  });

  test('convertHandler deve converter corretamente km para mi.', function () {
    assert.approximately(convertHandler.convert(1, 'km'), 0.62137, 0.00001);
  });

  test('convertHandler deve converter corretamente lbs para kg.', function () {
    assert.approximately(convertHandler.convert(1, 'lbs'), 0.45359, 0.00001);
  });

  test('convertHandler deve converter corretamente kg para lbs.', function () {
    assert.approximately(convertHandler.convert(1, 'kg'), 2.20462, 0.00001);
  });

});
