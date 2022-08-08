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

export async function getUrl(req, res) {
    const id = req.params.id;
    const {rows: urlList} = await connection.query(`SELECT * FROM urls WHERE id=${id}`)

    if (urlList.length === 0) {
        return res.sendStatus(404)
    }

    const object = {        
            "id": urlList[0].id,
            "shortUrl": urlList[0].shortenUrl,
            "url": urlList[0].url
        }
    
        return res.status(200).send(object)
}