let quantidade = require('../action/teste');
let mensagem = require('../action/teste2');
const { text } = require('express');


// O rotas denominadas "app", agora servem como parâmetro de uma arrow-funcition (Função Flecha).
module.exports = (app) => {    

//Segue abaixo das requisições de cada página html, criadas a partir de arquivos Marko.

    //Página principal.(index)
    app.get('/', function(req, resp) {
        resp.marko(
            require('../views/testeestagio/index.marko') 
        );
    });
    //Página de monitoramento de memoria.(memory_usage)
    app.get('/memory_usage', function(req, resp) {
        resp.marko(
            require('../views/testeestagio/memory.marko'),
            {
                consumo: [
                    //O consumo é detalhado através de um template dinâmico, onde a Quantidade
                    // é encontrada através do índice de uma lista importada.
                    {   
                        memoria: 'RSS (RAM)',
                        quantidade: quantidade[0],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Heap Total',
                        quantidade: quantidade[1],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Heap Usado',
                        quantidade: quantidade[2],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Externa',
                        quantidade: quantidade[3],
                        unidade: 'Megabytes'
                    },
                ]
            }
        );
    });
    // Através deste GET, recuperamos a string informada no message/post.
    app.get('/message', function(req, resp) {  
        // Caso não haja string salva na lista, retornará o status code "419".
        if ( mensagem.length != 0 ) {
            resp.send(mensagem[0])
        }
        else {
            resp.status(419).json({ error:  "Não há strings" });
        }

    });  
    // Essa requisição, absorve uma rota digitada diretamente na URL e a adciona em uma lista importada no índice[0].
    app.get('/message/post/:text', function(req, resp) {
        const text = req.params.text;
        // Quando receber o params, o mesmo já será incluído na lista e será retornado o status code "204".
        resp.status(204).json({ Sucesso: "String Armazenada com sucesso"});
        mensagem[0] = text;
        console.log(mensagem);
    });      
};

