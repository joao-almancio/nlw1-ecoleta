/* eslint-disable array-element-newline */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-unused-vars */

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// db.serialize(() => {
//   // Para criar uma tabela
//   // db.run("CREATE TABLE IF NOT EXISTIS nomeDaTabela (id INTEGER PRIMARY KEY AUTOINCREMENT, nomeDaColuna1 tipoDeDado, nomeDaColuna2 tipoDeDado, ...)")
//   // *** O úlimo dado não seve ser acompanhado por vírgula.
//   db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             number TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);
//   // Para BUSCAR TODOS os item de uma tabela
//   // db.all("SELECT * FROM nomeDaTabela", function (err, rows){})
//   // ** O argumento rows contém o retorno da sua Query devolve um conjunto/array de dados.

//   // Para BUSCAR um item específico da tabela
//   // db.run("SELECT nomeDaColuna FROM nomeDaTabela WHERE parametroDeBusca = ?", [valorDoParametroDeBusca], function (err){})

//   // Para ADICIONAR um item a uma tabela
//   // db.run("INSERT INTO nomeDaTabela (nomeDaColuna1, nomeDaColuna2, ... ) VALUES (?, ?, ... )", [valorDaColuna1, valorDaColuna2, ...], function (err){})

//   // Para DELETAR uma linha específica da tabela
//   // db.run("DELETE FROM nomeDaTabela WHERE parametroDeBusca = ?", [valorDoParametroDeBusca], function (err){})

//   // Para ATUALIZAR um dado específico da tabela
//   // db.run("UPDATE nomeDaTabela SET nomeDaColuna = ? WHERE parametroDeBusca = ?", [novoValor, valorDoParametroDeBusca], function (err){})
// });
