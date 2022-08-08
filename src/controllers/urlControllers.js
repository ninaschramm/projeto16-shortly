import connection from "../dbStrategy/postgres.js";
import { nanoid } from "nanoid";
import { newUrlSchema } from "../schemas/urlSchemas.js"

export async function shortenUrl(req, res) {
    const user = res.locals.user;
    const url = req.body.url;
    const shorten = nanoid();

    const validation = newUrlSchema.validate(req.body);

    if (validation.error) {
        console.log(validation.error.details)        
    return res.status(422).send(`${validation.error}`)  
    }


    await connection.query(`INSERT INTO urls ("userId", url, "shortenUrl") values ('${user.id}', '${url}', '${shorten}')`)

    const object = {
        "shortUrl": shorten
    }

    res.status(201).send(object)
}