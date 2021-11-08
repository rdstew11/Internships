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
  id SERIAL NOT NULL,
	name TEXT NOT NULL,
	street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  zipcode INTEGER NOT NULL,
	description TEXT NOT NULL,
	website TEXT,
	approved BOOLEAN DEFAULT FALSE,
  PRIMARY KEY ("name")

);

INSERT INTO accounts (username, password, account_type)
VALUES ('admin','admin','admin');

INSERT INTO company (name, street_address, city, state, zipcode, description, website)
VALUES
('Booz Allen Hamilton', '8283 Greensboro Drive', 'Mclean', 'Virginia', '22102',
'Booz Allen Hamilton Holding Corporation is the parent of Booz Allen Hamilton Inc., an American management and 
information technology consulting firm, headquartered in McLean, Virginia, in Greater Washington, D.C., with 80 other 
offices around the globe', 'https://boozallen.com' ),
('Revature', '11730 Plaza America Drive', 'Reston', 'Virginia', '20190',
'Revature is a technology talent development company headquartered in Reston, Virginia. Its unique business model involves 
hiring recent U.S. college graduates, training them in high demand software skills, and deploying them to work on information 
technology projects for Revature’s corporate and government clients', 'https://revature.com'),
('Google', '1600 Amphitheatre Parkway', 'Mountain View', 'California', '94043',
'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which 
include online advertising technologies, a search engine, cloud computing, software, and hardware.', 'https://careers.google.com'),
('Meta', '1 Hacker Way', 'Menlo Park', 'California', '94025',
'Meta Platforms, Inc., doing business as Meta, is an American multinational technology conglomerate holding company based in 
Menlo Park, California. It is the parent organization of Facebook, Instagram, and WhatsApp, among other subsidiaries.', 'https://facebookcareers.com'),
('Leidos', '1750 Presidents Street', 'Reston', 'Virginia', '20190',
'Leidos, formerly known as Science Applications International Corporation, is an American defense, aviation, information technology, and biomedical 
research company headquartered in Reston, Virginia, that provides scientific, engineering, systems integration, and technical services.',
'https://leidos.com'),
('Amazon', '1770 Crystal Drive', 'Arlington', 'Virginia', '22202',
'Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. 
It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Facebook, and Microsoft',
'https://hiring.amazon.com');

INSERT INTO postings (title, company_name, city, state, description, email, start_date, end_date)
VALUES 
('Software Engineer', 'Booz Allen Hamilton', 'Arlington', 'Virginia',
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
  ('Dev Ops Engineer', 'Meta', 'Reston', 'Virginia',
'Lorem ipsum dolor sit amet, has ne putant adipiscing. Id sea pertinacia disputando, no his ubique semper, 
vel nominavi qualisque deseruisse et. Eu debet meliore aliquando nec, causae scaevola ad qui. Mea ei admodum definiebas.
 Ad probo ipsum usu, id neglegentur contentiones mel.',
 'hiring@meta.com', '2021-10-20', '2022-01-01'),
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

 
  