module.exports = {
    addStudent,
    approveStudent,
    denyStudent,
    getApprovedStudents,
    getUnapprovedStudents
}

async function addStudent(pool, q){
    try{
        const email = q.email;
        const firstname = q.firstname;
        const lastname = q.lastname;
        const grad_date = q.grad_date;
        const biography = q.biography;
        const gpa = q.gpa;
        const linkedin = q.linkedin
        const website = q.website;
        const gender = q.gender;
        const major = q.major;
        const minor = q.minor;
        const approved = q.approved ?? false;
        const template = "INSERT INTO student (email, firstname, lastname, grad_date,  biography, gpa, linkedin, website, gender, major, minor, approved) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);";
        const res = await pool.query(template, [email, firstname, lastname, grad_date, biography, gpa, linkedin, website, gender, major, minor, approved]);

        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function approveStudent(pool, email){
    try{
        const template = "UPDATE student SET approved = TRUE WHERE email = $1;";
        const res = await pool.query(template, [email]);
        return res;
    }catch(err){
        console.log(err.stack)
        return err;
    }
}

async function denyStudent(pool, email){
    try{
        const template = "DELETE FROM student WHERE email = $1;";
        const res = await pool.query(template, [email]);

        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getApprovedStudents(pool){
    try{
        const res = await pool.query("SELECT * FROM student WHERE approved = TRUE;");
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getUnapprovedStudents(pool){
    try{
        const res = await pool.query("SELECT * FROM student WHERE approved = FALSE;");
        return res.rows;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}