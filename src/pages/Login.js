import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react"
import axios from "axios";
import "../css/style.css";

const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = (event) => {
        // console.log(event);
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({  email :state.email,
            password: state.password 
            });
        axios({
            method: 'post',
            url: 'http://localhost:3000/user',
            data: state
        })
            .then((res) => {
                console.log('res', res.data);
                if(res.data.status=="success"){
                    alert(res.data.message)
                    localStorage.setItem('token',JSON.stringify(res.data.token))
                    console.log(JSON.parse(localStorage.getItem('token')));
                }
            })
    };

    return (
        <>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={state.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-control">
                        <label></label>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Login