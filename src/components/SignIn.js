import React, { useState } from 'react';
import api from '../utils/api';

function SignIn(props) {
    const [error, setError] = useState()
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();

        api()
            .post('/signin', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('/account')
            })
            .catch(err => {
                setError(err.response.data.message)
            })

    }

    return (
        <form onSubmit={handleSubmit}>
            {error && <div className='error'>{error}</div>}

            <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                value={data.email} 
                onChange={handleChange}
            />
            <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                value={data.password} 
                onChange={handleChange}
            />

            <button type='submit'>Sign In</button>
        </form>
    )
}

export default SignIn;