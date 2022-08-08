import connection from "../dbStrategy/postgres.js";
import { nanoid } from "nanoid";
import { newUrlSchema } from "../schemas/urlSchemas.js"

export async function shortenUrl(req, res) {
    const user = res.locals.user;
    const url = req.body.url;
    const shorten = nanoid();

    const validation = newUrlSchema.validate(req.body);

    if (validation.error) {       
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
    const {rows: urlList} = await connection.query(`SELECT * FROM urls WHERE id=$1`, [id])

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

export async function redirectUser(req, res) {

    const shortUrl = req.params.shortUrl;
    const {rows: verifyUrl} =  await connection.query(`SELECT * FROM urls WHERE "shortenUrl"=$1`, [shortUrl])
    
    if (verifyUrl.length === 0) {
        return res.sendStatus(404)
    }

    const url = verifyUrl[0].url

    await connection.query(`UPDATE urls SET visited = visited + 1 WHERE "shortenUrl"=$1`, [shortUrl])
    
    res.redirect(`${url}`)
}

export async function deleteUrl(req, res) {
    const id = req.params.id;
    const user = res.locals.user;

    const {rows: verifyUrl} = await connection.query(`SELECT * FROM urls WHERE id=$1`, [id])

    if (verifyUrl.length === 0) {
        return res.sendStatus(404)
    }

    const {rows: verifyUserId} = await connection.query(`SELECT * FROM urls WHERE id=$1 and "userId"=$2`, [id, user.id])

    if (verifyUserId.length === 0) {
        return res.sendStatus(401)
    }

    await connection.query(`DELETE FROM urls WHERE id=$1`, [id])
    res.sendStatus(204)
}