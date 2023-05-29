const mysql = require('mysql2/promise');
const conf = require('./config');


async function CHECK_CONN()
{
    let status_conn     = false;
    let connection      = await mysql.createConnection(conf.db);


    try {
        //LET CONN DB BEGIN
        await connection.connect((err) => {
            console.log("STAT",err)

            if(err) {
                status_conn = false
            }
            else {
                status_conn = true
            }
        })
    }
    catch (err)
    {
        console.log("ERR",err)
        status_conn = false
    }

    return status_conn;
}

async function query(sql, params)
{
    const conn      = await mysql.createPool(conf.db);
    const [ rs, ]   = await conn.execute(sql, params);

    conn.end();

    return rs;
}

async function destroy()
{
    const conn = (await mysql.createConnection(conf.db)).destroy();
    return conn;
}

module.exports = {
    CHECK_CONN,
    query
}