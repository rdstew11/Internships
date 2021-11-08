module.exports = {
    addStudent,
    approveStudent,
    denyStudent,
    getApprovedStudents,
    getUnapprovedStudents
}

async function addStudent(pool, q){
    try{
        const first_name = q.first_name;
        const last_name = q.last_name;
        const grad_date = q.grad_date;
        const resume_filename = q.resume_filename;
        const biography = q.biography;
        const gpa = q.gpa;
        const external_link = q.external_link;
        const gender = q.gender;
        const ethnicity = q.ethnicity;
        const approved = q.approved;
        const template = "INSERT INTO student (first_name, last_name, grad_date, resume_filename, biography, gpa, external_link, gender, ethnicity, approved) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";
        const res = await pool.query(template, [first_name, last_name, grad_date, resume_filename, biography, gpa, external_link, gender, ethnicity, approved]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function approveStudent(pool, email){
    try{
        const template = "UPDATE student SET approved = TRUE WHERE email = $1;"
        const res = await pool.query(template, [email]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function denyStudent(pool, email){
    try{
        const template = "DELETE FROM student WHERE email = $1;";
        const res = await pool.query(template, [email]);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getApprovedStudents(pool){
    try{
        const template = "SELECT * FROM student WHERE approved = TRUE;"
        const res = await pool.query(template);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}

async function getUnapprovedStudents(pool){
    try{
        const template = "SELECT * FROM student WHERE approved = FALSE;"
        const res = await pool.query(template);
        console.log(res);
        return res;
    }catch(err){
        console.log(err.stack);
        return err;
    }
}