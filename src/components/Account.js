import React, { useState, useEffect } from 'react';
import { userInfo } from 'os';
import api from '../utils/api';

function Account(props) {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        api().get('/me')
            .then(res => {
                setUser({
                    name: res.data.name,
                    email: res.data.email
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <h1>My Account</h1>
            <div className='account-row'>Name: {user.name}</div>
            <div className='account-row'>Email: {user.email}</div>
        </>
    )
}

export default Account