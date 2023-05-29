import db from '../../connection';
import { API_RESPONSE_200, API_RESPONSE_400, API_RESPONSE_500 } from '../../constants';

export default async function handler(req, res) {

    
    let rs = API_RESPONSE_500

    let username    = null
    let email       = null
    let age         = null

    try
    {
        let formData = req.body;

        //CONTOT DKT POSTMAN
        // param = {
        //    username : 'wawa'
        //}

        username    = formData.username
        email       = formData.email
        age         = formData.age

        /*if(!username || username === null || username === "")
        {
            rs = API_RESPONSE_400
            rs.message = "Parameter username is undefined / not passed"
        }
        else if(!email || email === null || email === "")
        {
            rs = API_RESPONSE_400
            rs.message = "Parameter email is undefined / not passed"
        }
        else if(!age || age === null || age === "")
        {
            rs = API_RESPONSE_400
            rs.message = "Parameter age is undefined / not passed"
        }
        else
        {*/
            let sql     = `INSERT INTO wawa (USERNAME, EMAIL, AGE) 
                            VALUES ( ?, ?, ?)`
            let query   = await db.query(sql, [ username , email, age ]);

            console.log(query);
            
            if(query.insertId)
            {
                rs = API_RESPONSE_200
                rs.data = {
                    insertId : query.insertId
                }
            }
            else
            {
                rs = API_RESPONSE_500
                rs.data = {
                    insertId: null
                }
            }
       // }
    }
    catch(err)
    {
        rs = API_RESPONSE_500
        rs.data = err
    }


    res.status(rs.status_code).json(rs);
}
