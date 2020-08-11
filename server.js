// Este é o arquivo que deve ser exutado para testes em servidor local
// Utilize o comando "node server.js" no cmd com este diretório aberto para rodar o servidor.

// Para diminuir a responsabilidade do arquivo, as informações do servidor pelo framework "Express", estão sendo importadas.
const app = require('./src/config/custom-express');


// Comando para localizar a porta do servidor, e uma mensagem de confirmação.
app.listen(80, function() {
    console.log('servidor rodando na porta 3000');
});

