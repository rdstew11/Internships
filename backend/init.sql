DROP TABLE IF EXISTS accounts;
CREATE TABLE accounts (
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    account_type TEXT NOT NULL
);

DROP TABLE IF EXISTS postings ;
CREATE TABLE postings (
    id SERIAL NOT NULL,
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
    PRIMARY KEY ("id")
);
DROP TABLE IF EXISTS company ;
CREATE TABLE company (
	name TEXT NOT NULL,
	address TEXT NOT NULL,
	description TEXT NOT NULL,
	website_link TEXT,
	posting_id TEXT NOT NULL,
	approved BOOLEAN DEFAULT FALSE
);

GRANT SELECT, INSERT, DELETE, UPDATE ON accounts to rdstew;
GRANT SELECT, INSERT, DELETE, UPDATE ON postings to rdstew;
GRANT USAGE ON postings_id_seq to rdstew;

