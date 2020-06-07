const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./src/database/database.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            number TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `);

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            number,
            state,
            city,
            items
        ) VALUES (?, ?, ?, ?, ?, ?, ?);
    `
    const values = [
        "https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        "Guilherme",
        "Rua tomoichi Shimizu",
        "123",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lampadas"
    ];

    function afterInsertData(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Cadastrado com sucesso.");
        console.log(this);
    }

    db.run(query, values, afterInsertData);
})