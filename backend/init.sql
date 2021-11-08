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
    email TEXT NOT NULL,
    phone_number TEXT,
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

INSERT INTO accounts (username, password, account_type)
VALUES ('admin','admin','admin');

INSERT INTO postings (title, company_name, city, state, description, email, start_date, end_date)
VALUES 
('Software Engineer', 'Booze Allen Hamilton', 'Arlington', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@bah.com', '2021-10-20', '2022-01-01'),
 ('Software Developer', 'Revature', 'Richmond', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@revature.com', '2021-10-20', '2021-12-01'),
 ('Software Development Engineer', 'Amazon', 'Reston', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@amazon.com', '2021-10-20', '2022-01-01'),
  ('Dev Ops Engineer', 'Facebook', 'Reston', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@facebook.com', '2021-10-20', '2022-01-01'),
  ('Software Engineer Intern', 'Google', 'Fairfax', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@google.com', '2021-10-20', '2022-01-01'),
  ('Software Engineer', 'Google', 'Fairfax', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@google.com', '2021-10-20', '2022-01-015'),
  ('Software Developer', 'Leidos', 'Charlottesville', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@leidos.com', '2021-10-20', '2022-02-01');
 
  
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

