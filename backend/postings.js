module.exports = {
    addPost,
    getPosts,
    removePost,
    getUnapprovedPosts,
    approvePost,
    denyPost
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
        const template = "INSERT INTO postings (title, company_name, city, state, description, start_date, end_date) VALUES ($1, $2, $3, $4, $5, $6, $7);";
        const res = await pool.query(template, [title, company_name, city, state, description, start_date, end_date]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getPosts(pool){
    try{
        const res = await pool.query("SELECT * FROM postings;");
        console.log(res.rows)
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function removePost(pool, date){
    try{
        const template = "DELETE FROM postings WHERE end_date = $1;";
        const res = pool.query(template, [date]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getUnapprovedPosts(pool){
    try{
        const res = pool.query("SELECT * FROM postings WHERE approved = FALSE;");
        console.log(res.rows);
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function approvePost(pool, id){
    try{
        const template = "UPDATE postings SET approved = TRUE WHERE id = $1;";
        const res = pool.query(template, [id]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function denyPost(pool, id){
    try{
        const template = "DELETE FROM postings WHERE id = $1;";
        const res = pool.query(template, [id]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

