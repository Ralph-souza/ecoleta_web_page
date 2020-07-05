const express = require("express")
const server = express()

// Configuração da pasta pública
server.use(express.static("public"))

// Configuração de caminhos
// Página home
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

// Ligar o servidor
server.listen(3000)