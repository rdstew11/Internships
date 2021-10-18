const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 8080,
});

client.connect();

async function addAccount(q){
    try{
        const un = q.username;
        const pw = q.password;
        const at = q.account_type;
        const res = await client.query(`INSERT INTO accounts (username, password, account_type) VALUES ('${un}', '${pw}', '${at}');`);
        console.log(res);
    }catch(err){
        console.log(err.stack);
    }
}