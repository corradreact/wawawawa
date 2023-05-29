
import { useRouter } from 'next/router';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const Profile = () => {

    const router                        = useRouter()
    const [ loading, set_loading ]      = useState(false)
    const [ username, set_username ]    = useState('')
    const [ email, set_email ]          = useState('')
    const [ age, set_age ]              = useState('')
   

    const apiSave = async() => {

        set_loading(true)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("username", username);
        urlencoded.append("email", email);
        urlencoded.append("age", age);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        //await is processing
        await fetch("http://localhost:3000/api/insert", requestOptions)
        .then(response => response.json())
        .then(rs => {
            if(rs.status_code === 200)
            {
                router.push('/user')
                set_loading(false)
            }
            else
            {
                alert('Not success')
                set_loading(false)
            }
        })
        .catch(error => console.log('error', error));
    }

    

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card">
                    <h2>Contoh Form</h2>
                </div>
                <div className="col-12">
                    <div className="card p-fluid">
                        <h5>Profile</h5>
                        <div className="field">
                            <label htmlFor="name1">Name</label>
                            <InputText id="name1" type="text" onChange={ text => set_username(text.target.value)}/>
                        </div>
                        <div className="field">
                            <label htmlFor="email1">Email</label>
                            <InputText id="email1" type="text" onChange={ text => set_email(text.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="age1">Age</label>
                            <Dropdown  id="age1" onChange={ text => set_age(text.target.value)}>
                                <option id="1">1</option>
                                <option id="2">31</option>
                                <option id="21">122</option>
                            </Dropdown>
                        </div>
                        <Button label="Submit" onClick={() => apiSave()}></Button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Profile;
