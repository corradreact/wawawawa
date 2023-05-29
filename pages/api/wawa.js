import db from '../../connection';
import { API_RESPONSE_500 } from '../../constants';

export default async function heandler(req, res) {
    
    let rs = API_RESPONSE_500

    try
    {
        let sql     = `SELECT * FROM wawa`
        let query   = await db.query(sql);

       if(query.length > 0)
       {
            rs.status_code  = 200;
            rs.status       = 'success'
            rs.message      = ''
            rs.data         = query
       }
       else
       {
            rs.status_code  = 200;
            rs.status       = 'failed'
            rs.message      = 'No data found'
            rs.data         = []
       }

    }
    catch(err)
    {

    }


    res.status(rs.status_code).json(rs);
}
