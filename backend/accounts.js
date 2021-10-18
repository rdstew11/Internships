const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 8080,
});

db.connect();

async function addAccount(q){
    try{
        const un = q.username;
        const pw = q.password;
        const at = q.account_type;
        const res = await db.query(`INSERT INTO accounts (username, password, account_type) VALUES ('${un}', '${pw}', '${at}');`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}