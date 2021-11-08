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

DROP TABLE IF EXISTS company ;
CREATE TABLE company (
	name TEXT NOT NULL,
	address TEXT NOT NULL,
	description TEXT NOT NULL,
	website_link TEXT,
	posting_id TEXT NOT NULL,
	approved BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS student ;
CREATE TABLE student(
	email TEXT NOT NULL,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	grad_date DATE NOT NULL,
	resume_filename TEXT,
	biography TEXT,
	gpa FLOAT,
	external_link TEXT,
	gender TEXT,
	ethnicity TEXT,
	approved BOOLEAN DEFAULT FALSE
);

