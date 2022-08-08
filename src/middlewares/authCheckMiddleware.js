import connection from "../dbStrategy/postgres.js";

export default async function validateToken(req, res, next) {
    
    const {authorization} = req.headers;
    const token = authorization?.replace('Bearer ', '');

    if(!token) {
        return res.sendStatus(401);
    }

    try {        
        const {rows: session} = await connection.query(`SELECT * FROM sessions WHERE token='${token}'`)
        const {rows: user} = await connection.query(`SELECT * FROM users WHERE id='${session[0].userId}'`)
        res.locals.user = user[0];
        next();
    }
    catch(error) {
        return res.sendStatus(401);
    }
}