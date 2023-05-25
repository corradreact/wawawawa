
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Crud = () => {
   
    const router                        = useRouter()
    const [ listbank, set_listbank ]    = useState([])

    useEffect(() => {
        hitAPI()
    }, [])

    const hitAPI = async() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        //await is processing
        await fetch("https://toyyibpay.com/api/getBankFPX", requestOptions)
        .then(response => response.json())
        .then(rs => {
            if(rs.length > 0 )
            {
                console.log(rs)
                set_listbank(rs)
            }
        })
        .catch(error => console.log('error', error));
    }

    

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card" /*onClick={() => set_listbank()}*/>
                    <h2>Ini LESEN</h2>
                </div>
            </div>
           
        </div>
        
    );
};

export default Crud;
