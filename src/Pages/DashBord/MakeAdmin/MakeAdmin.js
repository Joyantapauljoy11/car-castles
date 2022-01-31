import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdmin = e => {
        const user = { email }
        fetch('https://frozen-bayou-91058.herokuapp.com/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('made admin')
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <small className="text-light">#make_admin</small>
            <div>
                <div>
                    <input onBlur={handleOnBlur} type="text" /><br />
                    <button onClick={handleAdmin}>Make admin</button>
                </div>
            </div>
        </Container>
    );
};

export default MakeAdmin;