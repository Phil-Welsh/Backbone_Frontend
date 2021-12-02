import React, { useLayoutEffect, useState  } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import ValidationError from './ValidationError'
import './Login.css'

function Login() {

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    async function handleLogin(e) {
        e.preventDefault()

        const form = e.target;
        const user = {
            username: form[0].value,
            email: form[1].value,
            password: form[2].value
        }

        try {
            const res = await fetch("https://backbone-welsh.herokuapp.com/api/v1/login", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const data = await res.json()
            localStorage.setItem("token", data.token)
            setErrorMessage(data.message)
        } catch(err) {
            setErrorMessage(err)
        }
    }

    // useLayoutEffect(() => {
    //     fetch("/api/isUserAuth", {
    //         headers: {
    //             "x-access-token": localStorage.getItem("token")
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => data.isLoggedIn ? navigate("/dashboard"): null)
    //     .catch(err => setErrorMessage(err))
    // }, [navigate])

    return (
        <div className="login-card">
            <h1>Login</h1>
                <form onSubmit={(e) => handleLogin(e)}>
                    <label htmlFor="username">Username</label> <br/>
                    <input type="text" name="username" id="username" /> <br/>
                    <label htmlFor="email">Email</label> <br/>
                    <input type="text" name="email" id="email" /> <br/>
                    <label htmlFor="password">Password</label> <br/>
                    <input type="password" name="password" id="password" /> <br/>
                    <input type="submit" value="Login"/> <br/>
                    <div>
                        <h3>Don't have an account?</h3>
                        <Link to="/register">Register</Link>
                    </div>
                </form>
            {errorMessage === "Success" ? navigate("/profile"): <ValidationError message={errorMessage} />}
        </div>
    )
}

export default Login;
