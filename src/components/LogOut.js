import React from 'react';

import { Redirect } from 'react-router-dom';

function LogOut(props) {
    localStorage.removeItem('token')
    return <Redirect to='signin'></Redirect>
}

export default LogOut;