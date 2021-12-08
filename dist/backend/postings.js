module.exports = {
    addPost,
    searchPosts,
    getApprovedPosts,
    removePost,
    getUnapprovedPosts,
    approvePost,
    denyPost,
    getPostingsByCompany
}

async function searchPosts(pool, q){
    try{
        const template = `SELECT * FROM postings WHERE (title || ' ' || company_name || ' ' || description ILIKE '%${q}%') AND (approved = TRUE);`;
        const res = await pool.query(template);
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function addPost(pool, q){
    try{
        const title = q.title;
        const company_name = q.company_name;
        const city = q.city;
        const state = q.state;
        const description = q.description;
        const start_date = q.start_date;
        const end_date = q.end_date;
        const email = q.email;
        const phone_number = q.phone_number;
        const external_link = q.external_link;
        const template = "INSERT INTO postings (title, company_name, city, state, description, start_date, end_date, email, phone_number, external_link) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";
        const res = await pool.query(template, [title, company_name, city, state, description, start_date, end_date, email, phone_number, external_link]);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getApprovedPosts(pool){
    try{
        const res = await pool.query("SELECT * FROM postings WHERE approved = TRUE;");
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function removePost(pool, date){
    try{
        const template = "DELETE FROM postings WHERE end_date = $1;";
        const res = await pool.query(template, [date]);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getUnapprovedPosts(pool){
    try{
        const res = await pool.query("SELECT * FROM postings WHERE approved = FALSE;");
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function approvePost(pool, id){
    try{
        const template = "UPDATE postings SET approved = TRUE WHERE id = $1;";
        const res = await pool.query(template, [id]);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function denyPost(pool, id){
    try{
        const template = "DELETE FROM postings WHERE id = $1;";
        const res = await pool.query(template, [id]);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getPostingsByCompany(pool, company){
    try{
        const template = "SELECT * FROM postings WHERE company_name=$1 AND approved=TRUE"
        const res = await pool.query(template, [company]);
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

