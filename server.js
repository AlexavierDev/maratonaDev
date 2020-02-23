//CONFIGURANDO SERVIDOR
const express = require('express')
const server = express()


//LISTA DE DOADORES
const donors = [
    {
        name: "Larissa Sanches",
        blood: "0-"
    },
    {
        name: "Tales fernandes",
        blood: "0+"
    },
    {
        name: "Alex Xavier",
        blood: "B+"
    },
    {
        name: "Lilia Moreira",
        blood: "A+"
    }
] 


// HABILITAR BODY DO FORM

server.use(express.urlencoded({extended: true}))


//CONFIGURANDO SERVIDOR P/ APRESENTAR ARQUIVOS EXTRAS
server.use(express.static('public'))


//LIGAR SERVIDOR E PERMITIR ACESSO
server.listen(3000)


//CONFIGURANDO APRESENTAÇAO DA PAGINA
server.get("/", function(req, res){
    return res.render('index.html', {donors})
})


//CONFIGURANDO P/ PEGAR DADOS DO FORM
server.post("/",function(req,res){
    const name = req.body.name
    const blood = req.body.blood
    const email = req.body.email

// ADD DADOS AO ARRAY
    donors.push({
        name: name,
        blood: blood
    })

    return res.redirect("/")

})

//CONFIGURANDO A TEMPALTE ENGINE
const nunjucks = require('nunjucks')
nunjucks.configure("./",{
    express:server,
    noCache: true, 
}) 