const express = require("express")
const server = express()

// Configuração da pasta pública
server.use(express.static("public"))

// Configurando a template engine 'NUNJUCKS'
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

// Configuração de caminhos
// Página home
server.get("/", (req, res) => {
    res.render("index.html")
})

server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

// Ligar o servidor
server.listen(3000)