module.exports = {
    addAccount,
    removeAccount,
    validateAccount
}

async function addAccount(pool, q){
    try{
        const un = q.username;
        const pw = q.password;
        const at = q.account_type;
        const template = "INSERT INTO accounts (username, password, account_type) VALUES ($1, $2, $3);";
        const res = await pool.query(template, [un, pw, at]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function removeAccount(pool, un){
    try{
        const template = "DELETE FROM accounts WHERE username = $1;";
        const res = await pool.query(template, [un]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function validateAccount(pool, un, pw){
    try{
        const template = "SELECT account_type FROM accounts WHERE (username = $1, AND password = $2);";
        const res = await pool.query(template, [un, pw]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}
