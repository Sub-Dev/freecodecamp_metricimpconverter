# 📏 Conversor Imperial-Métrico

Este é um projeto de conversor de unidades entre o sistema imperial e o sistema métrico, desenvolvido para a certificação de Controle de Qualidade do FreeCodeCamp.

## 📌 Funcionalidades

✅ Conversão entre diversas unidades de medida
✅ Identifica entradas válidas e inválidas
✅ Responde com JSON contendo os valores convertidos
✅ API desenvolvida com Express.js
✅ Testes unitários e funcionais com Mocha e Chai

## 🚀 Tecnologias Utilizadas

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

## 📂 Estrutura do Projeto

```
boilerplate-project-metricimpconverter/
│-- controllers/
│   ├── convertHandler.js  # Lógica principal de conversão
│-- tests/
│   ├── 1_unit-tests.js    # Testes unitários
│   ├── 2_functional-tests.js # Testes funcionais
│-- server.js  # Configuração do servidor Express
│-- README.md  # Documentação do projeto
│-- package.json  # Dependências e scripts
```

## 🔧 Como Executar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/Sub-Dev/freecodecamp_metricimpconverter.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   npm start
   ```

O servidor rodará em `http://localhost:3000`.

## 🧪 Como Rodar os Testes

Para executar os testes unitários e funcionais, utilize:

```sh
npm test
```

## 🖥️ Endpoints da API

### 📌 `GET /api/convert?input={valor}{unidade}`

**Exemplo de uso:**

```
/api/convert?input=10L
```

**Resposta JSON:**

```json
{
  "initNum": 10,
  "initUnit": "L",
  "returnNum": 2.64172,
  "returnUnit": "gal",
  "string": "10 liters converts to 2.64172 gallons"
}
```

## 📜 Licença

Este projeto segue a licença MIT.

---

Feito com 💙 para o FreeCodeCamp!

# Metric-Imperial Converter

This is the boilerplate for the Metric-Imperial Converter project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/quality-assurance/quality-assurance-projects/metric-imperial-converter
