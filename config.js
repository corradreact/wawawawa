const conf = {
    db: {
        host    : process.env.DEVELOPMENT_DBHOST,
        user    : process.env.DEVELOPMENT_DBUSERNAME,
        password     : process.env.DEVELOPMENT_DBPASSWORD,
        database   : process.env.DEVELOPMENT_DBNAME,
        connectionLimit : 60
    },
    listPerPage : 10

};


module.exports = conf;