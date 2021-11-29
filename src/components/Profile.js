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
                setUser(data)
            })
            .catch(err => alert(err))
    }, [user])

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
                <header>
                    {user.username !== "User Not Found" ? <img src={user.pfp} alt="" /> : null}
                    <h1>{user.username}</h1>
                </header>
                {user.username === "User Not Found"
                    ? null
                    : <>
                        <h1>Biography</h1>
                        <div>{user.bio}</div>
                        <h1>Created Groups</h1>
                        <div>
                            {user.createdGroups
                                ? user.createdGroups.map(group => (
                                    <Link key={group._id} to={group.url}>{group.groupName}</Link>
                                ))
                                : <div>Loading...</div>}
                        </div>
                    </>
                }
{/* 
                {user.canEdit
                    ? <form onSubmit={(e) => changeUserInfo(e)}>
                        <label htmlFor="bio">Change Bio</label>
                        <textarea maxLength="1000" name="bio" id="bio" />
                        <input type="submit" value="Submit" />
                        <p>1000 characters maximum</p>
                    </form>
                    : <></>
                } */}
            </div>
        </div>
    )
}

export default Profile
