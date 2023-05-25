function command(cmd, socket){
    switch(cmd){ // Filtra oque o cliente mandou e procura se tem algum comando
        case "inicio": 
            socket.write("Iniciado!");
        break;
        // Continue seus comandos aqui em baixo!
    }
}
module.exports = {command}