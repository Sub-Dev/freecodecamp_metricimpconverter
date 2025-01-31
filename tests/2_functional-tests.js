const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function () {

  test('Converter uma entrada válida, como 10L: GET solicitação para /api/convert.', function (done) {
    chai.request(server)
      .get('/api/convert?input=10L')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 10);
        assert.equal(res.body.initUnit, 'L');
        assert.approximately(res.body.returnNum, 2.64172, 0.00001);
        assert.equal(res.body.returnUnit, 'gal');
        done();
      });
  });

  test('Converta uma entrada inválida, como 32g: solicitação de GET para /api/convert.', function (done) {
    chai.request(server)
      .get('/api/convert?input=32g')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid unit');
        done();
      });
  });

  test('Converta um número inválido, como 3/7.2/4kg: solicitação de GET para /api/convert.', function (done) {
    chai.request(server)
      .get('/api/convert?input=3/7.2/4kg')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid number');
        done();
      });
  });

  test('Converta um número inválido E uma unidade, como 3/7.2/4kilomegagram: solicitação de GET para /api/convert.', function (done) {
    chai.request(server)
      .get('/api/convert?input=3/7.2/4kilomegagram')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.text, 'invalid number and unit');
        done();
      });
  });

  test('Converta sem número, como kg: solicitação de GET para /api/convert.', function (done) {
    chai.request(server)
      .get('/api/convert?input=kg')
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.initNum, 1);
        assert.equal(res.body.initUnit, 'kg');
        assert.approximately(res.body.returnNum, 2.20462, 0.00001);
        assert.equal(res.body.returnUnit, 'lbs');
        done();
      });
  });

});
