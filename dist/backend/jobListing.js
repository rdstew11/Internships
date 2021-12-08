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
    posting_id INT NOT NULL,
    title TEXT NOT NULL,
    company_name TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    description TEXT NOT NULL,
    start_date DATE,
    end_date DATE NOT NULL,
    approved BOOLEAN DEFAULT FALSE,
    alumni BOOLEAN DEFAULT FALSE,
    external_link TEXT,
    PRIMARY KEY ("posting_id")
);
`;

const addJobListing = `
INSERT INTO postings (posting_id, title, company_name, city, state, description, start_date, end_date) 
VALUES (1, 'IT Specialist', 'Google', 'Arlington', 'VA', 'All IT needs', '2021-10-10', '2021-12-31')
`;

const getJobListing = `
SELECT * FROM postings
`;

const getUnapprovedJobListing = `
SELECT * FROM postings WHERE approved = FALSE
`;

const removeJobListing = `
DELETE FROM postings WHERE end_date='2021-10-01'
`;

const approveJobListing = `
UPDATE postings SET approved = True WHERE posting_id = 1
`;

const denyJobListing = `
DELETE FROM postings WHERE posting_id = 1
`;

client.query(createPostingsTable, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Posting table is successfully created');
});

client.query(addJobListing, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Added job listing successfully');
});

client.query(getJobListing, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    for(let row of res.rows){
        console.log(row);
    }
});

client.query(getUnapprovedJobListing, (err, res) => {
    if (err) {
        consolve.error(err);
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
    console.log('Job Posting Expired: Data delete successful');
});

client.query(approveJobListing, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Job Posting Approved: Data update successful');
});

client.query(denyJobListing, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Job Posting Denied: Data delete successful');
});