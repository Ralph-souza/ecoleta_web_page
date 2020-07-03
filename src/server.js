const express = require("express")
const server = express()

// Configuração de caminhos
// Página home
server.get("/", (req, res) => {
    res.send("Olá mundo!")
})

// Ligar o servidor
server.listen(3000)