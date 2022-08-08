import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { newUserSchema, authUserSchema } from '../schemas/authSchemas.js';
import connection from '../dbStrategy/postgres.js';

export async function createUser(req, res) {
    const newUser = req.body; 

    const validation = newUserSchema.validate(newUser);

    if (validation.error) {
        console.log(validation.error.details)        
    return res.status(422).send(`${validation.error}`)  
    }

    const { rows: verifyExistingEmail } = await connection.query(`SELECT * FROM users WHERE email='${newUser.email}'`)

    if (verifyExistingEmail.length > 0) {
        return res.status(409).send("E-mail já cadastrado!")
    }

    const cryptoPass = bcrypt.hashSync(newUser.password, 10);
    
    await connection.query(`INSERT INTO users (name, email, password) VALUES ('${newUser.name}', '${newUser.email}', '${cryptoPass}')`);
    return res.sendStatus(201)
    
}

export async function loginUser(req, res) {
    const authUser = req.body;
    
    const validation = authUserSchema.validate(authUser);

    if (validation.error) {
        console.log(validation.error.details)        
    return res.status(422).send(`${validation.error}`)  
    }

    const { email, password } = authUser;
    console.log(email)
    const { rows: user } = await connection.query(`SELECT * FROM users WHERE email='${email}'`)
    console.log(user)
    
        if(user.length > 0 && bcrypt.compareSync(password, user[0].password)) {
            const token = uuid();   
            await connection.query(`INSERT INTO sessions ("userId", email, token) VALUES ('${user[0].id}', '${user[0].email}', '${token}')`); 
            
            res.status(200).send(`${token}`)
        } else {
            res.status(401).send("Usuário ou senha incorretos")
        }
}