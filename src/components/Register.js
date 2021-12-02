import React, { useLayoutEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ValidationError from './ValidationError'
import './Register.css'

function Register () {

    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    async function handleRegister(e) {
        e.preventDefault()

        const form = e.target
        const user = {
            username: form[0].value,
            firstName: form[1].value,
            lastName: form[2].value,
            icon: form[3].value,
            email: form[4].value,
            password: form[5].value,
            confirmPassword: form[6].value
        }

        try {
            const res = await fetch("https://backbone-welsh.herokuapp.com/api/v1/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            const data = await res.json()
            setErrorMessage(data.message)
        } catch (err) {
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
        <div className="register-card">
            <h1>Register</h1>
            <form onSubmit={(e) => handleRegister(e)}>
                <label htmlFor="username">Username</label> <br/>
                <input type="text" name="username" id="username" /> <br/>
                <label htmlFor="firstName">First name</label> <br/>
                <input type="text" name="firstName" id="firstName" /> <br/>
                <label htmlFor="lastName">Last name</label> <br/>
                <input type="text" name="lastName" id="lastName" /> <br/>
                <label htmlFor="icon">Icon image</label> <br/>
                <input type="text" name="icon" id="icon" /> <br/>
                <label htmlFor="email">Email</label> <br/>
                <input type="text" name="email" id="email" /> <br/>
                <label htmlFor="password">Password</label> <br/>
                <input type="password" name="password" id="password" /> <br/>
                <label htmlFor="password">Confirm Password</label> <br/>
                <input type="password" name="password" id="password" /> <br/>
                <input type="submit" value="Register" /> <br/>
                <div>
                    <h3>Already have an account?</h3>
                    <Link to="/login">Login</Link>
                </div>
                {errorMessage === "success" ? navigate("/login"): <ValidationError message={errorMessage} />}
            </form>
        </div>
    )
}
export default Register
