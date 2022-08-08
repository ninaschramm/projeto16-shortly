import connection from "../dbStrategy/postgres.js";

export async function getMyUrls(req, res) {
    const user = res.locals.user;
    const {rows: visitCountSum} = await connection.query(`SELECT SUM(visited) as "visitCount" 
    FROM urls
    WHERE "userId" = ${user.id}`)
    const visitCountTotal = parseInt(visitCountSum[0].visitCount);
    const {rows: shortenedUrls} = await connection.query(`SELECT id as id, url as url, "shortenUrl" as "shortUrl", visited as "visitCount" FROM urls WHERE "userId" = ${user.id}`)

    const object = {
        "id": user.id,
        "name": user.name,
        "visitCount": visitCountTotal,
        "shortenedUrls": shortenedUrls
    }

    res.status(200).send(object)
}

export async function getRanking(req, res) {
    const {rows: ranking} = await connection.query(`SELECT users.id as id, users.name as name, COUNT(urls."userId") as "linksCount", SUM(urls.visited) as "visitCount"
    FROM users
    LEFT JOIN urls
    ON urls."userId" = users.id
    GROUP BY users.id
    ORDER BY "visitCount" DESC NULLS LAST
    LIMIT 10`)

    for (let i of ranking) {
        if (i.visitCount === null) {
            i.visitCount = '0'
        }
    }

    res.status(200).send(ranking)
}