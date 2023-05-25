const net = require('net'), command = require('./utils/commands') // importando pacotes
const server = socket => {

    console.log(`Nova conexão: ${socket.remoteAddress.slice(7)}:${socket.remotePort}`) // Identificando nova conexão

    socket.on("data", async function(data){ // Evento de recebimentos de dados!
        console.log("Recebi do client: "+data.toString());
        command.command(data.toString(), socket);
    })
    socket.on("close", function(close){ // Evento de saida
        console.log(`${socket.remoteAddress.slice(7)} - Desconectou!`)
    })
    socket.on("error", function(err){ // Evento de Erro!
        console.log("Erro: "+err)
    })

}
const serverListen = new net.createServer(server) // criando servidor
serverListen.listen(110, ()=> console.log("Servidor online")) // Ouvindo a porta 110
