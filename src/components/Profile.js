import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

function Profile() {
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch("http://localhost:4000/api/v1/profile", {
            headers: {
                "authorization": localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(data => {
                setUser(data.user)
            })
            .catch(err => alert(err))
    }, [])

    // async function changeUserInfo(e) {
    //     e.preventDefault();
    //     const form = e.target
    //     const newBio = form[0].value;

    //     setUser({ ...user, bio: newBio })
    //     form[0].value = ""

    //     try {
    //         await fetch("/api/updateUserInfo", {
    //             method: "POST",
    //             headers: {
    //                 "x-access-token": localStorage.getItem("token"),
    //                 "Content-type": "application/json"
    //             },
    //             body: JSON.stringify({ newBio: newBio })
    //         })
    //     } catch (err) {
    //         alert(err)
    //     }
    // }

    return (
        <div>
            <div>
                <h1>Biography</h1>
                <div>{user.username}</div>
            </div>
        </div>
    )
}

export default Profile
