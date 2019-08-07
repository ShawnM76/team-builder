import React, { useState } from 'react';
import ReactDom from "react-dom";

function Form({bringTeamMember}) {
    
    const [ user, setUser] = useState({ Name: "", Email: "", Role: "" });
    console.log("user:", user)

    const changeHandler = (event) => {
        const updatedUser = { ...user, [event.target.name]: event.target.value };
        console.log('changeHandler:', event.target.name, event.target.value, updatedUser)
        setUser(updatedUser);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const addMember = bringTeamMember;
        addMember(user)
        console.log(user);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        name="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={user.Name}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Email: 
                    <input 
                        name="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={user.Email}
                        onChange={changeHandler}
                    />
                </label>
                <label>
                    Role:
                    <input
                        name="Role"
                        type="text"
                        placeholder="Enter your role"
                        value={user.Role}
                        onChange={changeHandler}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;