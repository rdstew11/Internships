const { Client } = require('pg');

const db = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 8080,
});

db.connect();

async function addPost(q){
    try{
        const title = q.title;
        const company_name = q.company_name;
        const city = q.city;
        const state = q.state;
        const description = q.description;
        const start_date = q.start_date;
        const end_date = q.end_date;
        const res = await db.query(`INSERT INTO postings (title, company_name, city, state, description, start_date, end_date) VALUES ('${title}', '${company_name}', '${city}', '${state}', '${description}', '${start_date}', '${end_date}');`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getPosts(){
    try{
        const res = await db.query(`SELECT * FROM postings;`);
        console.log(res)
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function removePost(date){
    try{
        const res = db.query(`DELETE FROM postings WHERE end_date='${date}';`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}