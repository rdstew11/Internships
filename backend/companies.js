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
        const email = q.email;
        const name = q.name;
        const address = q.address;
        const description = q.description;
        const website_link = q.website_link;
        const posting_id = q.posting_id;
        const approved = false;
        const template = "INSERT INTO company (email, name, address, description, website_link, posting_id, approved) VALUES ($1, $2, $3, $4, $5, $6, $7);";
        const res = await pool.query(template, [email, name, address, description, website_link, posting_id, approved]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function approveCompany(pool, name){
    try{
        const template = "UPDATE company SET approved = TRUE WHERE name = $1;";
        const res = await pool.query(template, [name]);
        console.log(res);
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
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function searchCompanies(pool, q){
    try{
        const template = `SELECT * FROM company WHERE name ILIKE '%${q}%';`;
        const res = await pool.query(template);
        console.log(res.rows);
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getApprovedCompanies(pool){
    try{
        const res = await pool.query("SELECT * FROM company WHERE approved = TRUE;");
        console.log(res.rows)
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getUnapprovedCompanies(pool){
    try{
        const res = await pool.query("SELECT * FROM company WHERE approved = FALSE;");
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}