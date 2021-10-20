

export async function addAccount(db, q){
    try{
        const un = q.username;
        const pw = q.password;
        const at = q.account_type;
        const res = await db.query(`INSERT INTO accounts (username, password, account_type) VALUES ('${un}', '${pw}', '${at}');`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

export async function validateAccount(db, un, pw){
    try{
        const res = await db.query(`SELECT account_type FROM accounts HWERE (username = ${un} AND password = ${pw});`);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}