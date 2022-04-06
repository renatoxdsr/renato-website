const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const videos = require("./data");


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})


server.get("/", function(req, res){
    const about = {
        avatar_url: "https://avatars.githubusercontent.com/u/59875607?v=4",
        name: "Renato Xavier",
        role: "Front-end Developer",
        description: "Javascript, HTML, CSS",
        link: [
            {name: "Github", url: "https://github.com/renatoxdsr"},
            {name: "Linkedin", url: "https://www.linkedin.com/in/renatoxavierinternational/"},
            {name: "Medium", url: "https://medium.com/@renatoxavier-ds"}
            
        ]
    }
    //return res.send("HI, lorena")
    // em vez de ser send de enviar algo
    // agora deve rederizar algo, então
    //ou seja rederizar alguam view, algum documento da pasta view
    return res.render("about", {about : about})
    // passar about para mostrar o const data
    //para mostrar a variavel data 
})

server.get("/portfolio", function(req, res){
    //enviar os dados do back-end para o front-end
    //enviar od dados dos videos no data.js para a pagina portfolio
    return res.render("portfolio", {itens : videos})
})


server.listen(5000, function(){
    console.log("Server is running")
})