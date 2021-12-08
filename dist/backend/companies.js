module.exports = {
    searchCompanies,
    addCompany,
    approveCompany,
    denyCompany,
    getApprovedCompanies,
    getUnapprovedCompanies
}

async function addCompany(pool, q){
    try{
        const name = q.name;
        const address = q.address;
        const city = q.city;
        const state = q.state;
        const zipcode = q.zipcode;
        const description = q.description;
        const website = q.website;
        const approved = false;
        const template = "INSERT INTO company (name, address, city, state, zipcode, description, website) VALUES ($1, $2, $3, $4, $5, $6, $7);";
        const res = await pool.query(template, [name, address, city, state, zipcode, description, website]);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getApprovedCompanies(pool){
    try{
        const template = 'SELECT * FROM company WHERE approved = TRUE;';
        const res = await pool.query(template,[]);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function getUnapprovedCompanies(pool){
    try{
        const template = 'SELECT * FROM company WHERE approved = FALSE;';
        const res = await pool.query(template,[]);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function approveCompany(pool, name){
    try{
        const template = "UPDATE company SET approved = TRUE WHERE name = $1;";
        const res = await pool.query(template, [name]);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function denyCompany(pool, name){
    try{
        const template = "DELETE FROM company WHERE name = $1;";
        const res = await pool.query(template, [name]);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function searchCompanies(pool, q){
    try{
        const template = `SELECT * FROM company WHERE (name ILIKE '%${q}%') AND (approved = TRUE);`;
        const res = await pool.query(template);
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}