// O rotas denominadas "app", agora servem como parâmetro de uma arrow-funcition (Função Flecha).
module.exports = (app) => {    
let factorial = require('../action/teste');

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
                        quantidade: factorial[0],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Heap Total',
                        quantidade: factorial[1],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Heap Usado',
                        quantidade: factorial[2],
                        unidade: 'Megabytes'
                    },
                    { 
                        memoria: 'Externa',
                        quantidade: factorial[3],
                        unidade: 'Megabytes'
                    },
                ]
            }
        );
    });
};

