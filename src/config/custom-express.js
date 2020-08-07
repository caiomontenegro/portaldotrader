//Arquivo para criação do servidor e Utilização dos demais recursos.


// Comando para permitir que o Marko possa ser executado corretamente, junto com o Node e o Express.
require('marko/node-require').install();
require('marko/express');

//Iniciação do framework Express, para facilitar o uso das requisições do protocolo HTTP.
const express = require('express');
const app = express();

//Chamada das rotas através de uma constante chamada "Rotas"
const rotas = require('../app/rotes/rotes')
rotas(app);

//Rotas passa a ser definida como "app", e em seguida é exportada.
module.exports = app;