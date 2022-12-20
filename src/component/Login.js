import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [validation] = useState("");

    const navigate = useNavigate();


    useEffect(() => {

        localStorage.setItem("email", "eve.holt@reqres.in");
        localStorage.setItem("password", "eve.holt@reqres.in");

        if (localStorage.getItem('token')) {

            navigate('/profile');
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault();
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "email": "eve.holt@reqres.in",
                "password": "muhammadreza"

            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
        navigate('/profile');
    };
    return (
        <div>
            <h1 className='my-5'><b>Login Page</b></h1>
            <div className='col-sm-6 offset-sm-3 my-5'>
                <hr />
                {
                    validation.message && (
                        <div className="alert alert-danger">
                            {validation.message}
                        </div>
                    )
                }
                <form onSubmit={loginHandler}>
                    <div className="mb-3">
                        <label className="form-label"> Email </label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Masukan Alamat Email" required />
                    </div>
                    {
                        validation.email && (
                            <div className="alert alert-danger">
                                {validation.email[0]}
                            </div>
                        )
                    }
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password" required />
                    </div>
                    {
                        validation.password && (
                            <div className="aler alert-danger">
                                {validation.password[0]}
                            </div>
                        )
                    }
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary"> Login </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
