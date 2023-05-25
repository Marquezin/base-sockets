const net = require('net'), client = new net.Socket(), readline = require('readline') // Importando pacotes
var rl = readline.createInterface(process.stdin, process.stdout); // Criando interface

client.connect(110, ()=> console.log("Conectado...")) // Se conectando ao servidor

rl.on('line', function(line){ // Eventos para enviar as mensagens
    client.write(line.toString())   // envio da escrita!
})

client.on('data', function(data){ // Evento para receber mensagens do servidor
 console.log("Recebi do Servidor: "+data.toString()) // Printando mensagens recebidas!
})