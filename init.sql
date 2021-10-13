DROP TABLE IF EXISTS accounts ;
CREATE TABLE accounts (
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    account_type TEXT NOT NULL
);

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
