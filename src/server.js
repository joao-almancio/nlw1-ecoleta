/* eslint-disable object-property-newline */
/* eslint-disable prefer-arrow-callback */
const express = require('express');
const server = express();
const db = require("./database/db.js");

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
});

server.get("/", (req, res) => {
  return res.render('index.html', { tittle: "Um titulo" });
})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
})

server.post("/savepoint", (req, res) => {
  db.run(
`INSERT INTO places (
    image, 
    name, 
    address, 
    number, 
    state, 
    city, 
    items
    ) VALUES (?, ?, ?, ?, ?, ?, ? )`, [
      req.body.image, 
      req.body.name, 
      req.body.address, 
      req.body.number, 
      req.body.state, 
      req.body.city, 
      req.body.items
    ], 
    function (err) {
      if (err) {
        console.log(err)

        // Criar uma página para tratamento de erros
        return res.send("Erro no Cadastro");
      }
      console.log("Dados inseridos com sucesso");
      console.log(this);

      return res.render("create-point.html", { saved: true });
  }
)
})

server.get("/search", (req, res) => {
  const { search } = req.query;

  if (search === "") {
    return res.render("search-results.html");
  }
  
  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    const total = rows.length;

    return res.render("search-results.html", { places: rows, total });
  })
})

console.log("Abrindo porta http://localhost:3000")
server.listen(3000);
