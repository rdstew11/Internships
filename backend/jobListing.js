const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'internships',
    password: 'password',
    port: 5432,
});

client.connect();

const createPostingsTable = `
DROP TABLE IF EXISTS postings ;
CREATE TABLE postings (
    title TEXT NOT NULL,
    company_name TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    description TEXT NOT NULL,
    start_date DATE,
    end_date DATE NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    alumni BOOLEAN DEFAULT FALSE,
    external_link TEXT
);
`;

const addJobListing = `
INSERT INTO postings (title, company_name, city, state, description, start_date, end_date) 
VALUES ('IT Specialist', 'Google', 'Arlington', 'VA', 'All IT needs', '2021-10-10', '2021-12-31')
`;

const getJobListing = `
SELECT * FROM postings
`;

const removeJobListing = `
DELETE FROM postings WHERE end_date='2021-10-01'
`;

client.query(createPostingsTable, (err, res) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Posting table is successfully created');
});

client.query(addJobListing, (err, res) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Added job listing successfully');
});

client.query(getJobListing, (err, res) =>{
    if(err) {
        console.error(err);
        return;
    }
    for(let row of res.rows){
        console.log(row);
    }
});

client.query(removeJobListing, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Data delete successful');
    client.end();
});
