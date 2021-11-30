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
            email: form[1].value,
            password: form[2].value,
            confirmPassword: form[3].value
        }

        try {
            const res = await fetch("http://localhost:4000/api/v1/register", {
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
        <div>
            <h1>Register</h1>
            <form onSubmit={(e) => handleRegister(e)}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="password" id="password" />
                <input type="submit" value="Register" />
                <div>
                    <h3>Already have an account?</h3>
                    <Link to="/login">Login</Link>
                </div>
                {errorMessage === "Success" ? navigate("/login"): <ValidationError message={errorMessage} />}
            </form>
        </div>
    )
}
export default Register
