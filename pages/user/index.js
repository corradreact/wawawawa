
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';


const User = () => {
   
    const router                = useRouter()
    const [ list, set_list ]    = useState([])

    useEffect(() => {
        hitAPI()
    }, [])

    const hitAPI = async() => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
          
        await fetch("http://localhost:3000/api/wawa", requestOptions)
        .then(response => response.json())
        .then(result => {
            if(result.data.length > 0 )
            {
                set_list(result.data)
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <h2 className='col-6'>User List</h2>
                    <Button  className='col-6' label="Add User" onClick={() =>  router.push("/profile")}></Button>
                </div>
                <div className="col-12">
                    <div className="card p-fluid">
                        <h5>List</h5>
                        <DataTable
                            value={list}
                            paginator
                            className="p-datatable-gridlines"
                            showGridlines
                            rows={20}
                            dataKey="id"
                            filterDisplay="menu"
                            responsiveLayout="scroll"
                            emptyMessage="Not found."
                        >
                                    <Column field="ID" header="ID" />
                                    <Column field="USERNAME" header="Username"  />
                                    <Column field="EMAIL" header="Email"    />
                                    <Column field="AGE" header="Age"   />
                        </DataTable>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default User;
