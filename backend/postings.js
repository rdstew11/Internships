export async function addPost(db, q){
    try{
        const title = q.title;
        const company_name = q.company_name;
        const city = q.city;
        const state = q.state;
        const description = q.description;
        const start_date = q.start_date;
        const end_date = q.end_date;
        const res = await db.query(`INSERT INTO postings (title, company_name, city, state, description, start_date, end_date) VALUES ('${title}', '${company_name}', '${city}', '${state}', '${description}', '${start_date}', '${end_date}');`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

export async function getPosts(db){
    try{
        const res = await db.query(`SELECT * FROM postings;`);
        console.log(res)
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

export async function removePost(db, date){
    try{
        const res = db.query(`DELETE FROM postings WHERE end_date='${date}';`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

export async function getUnapprovedPosts(db){
    try{
        const res = db.query(`SELECT * FROM postings WHERE approved = FALSE;`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

export async function approvePost(db, id){
    try{
        const res = db.query(`UPDATE postings SET approved = True WHERE id = ${id};`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

export async function denyPost(db, id){
    try{
        const res = db.query(`DELETE FROM postings WHERE id = ${id};`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}
