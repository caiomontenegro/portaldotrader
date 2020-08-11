// Comando para monitorar a memória.
const memoria = process.memoryUsage();

// Criamos uma lista vazia, para colhermos os 4 dados que serão gerados pelo FOR. sendo RSS o nosso foco principal (RAM)
let listaMemoria = [];

// Utilizamos um comando FOR, em seguida uma fórmula para obter os dados na unidade "Megabytes". 
// (Execute somente este arquivo para verificar os dados)
for (let x in memoria) {
    let MemoriaAtual = Math.round(memoria[x] / 1024 / 1024 * 100) / 100;
    console.log(` ${x} ${Math.round(memoria[x] / 1024 / 1024 * 100) / 100} `); 

    //Os dados são adcionados a nossa lista.
    listaMemoria.push(MemoriaAtual);
}

// Por ultimo, exportantos a lista "MemoriaLista" para o arquivo "rotes.js".
module.exports = listaMemoria;
