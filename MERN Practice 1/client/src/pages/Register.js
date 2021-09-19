import React from 'react'
import { useState } from "react"

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:1333/api/register',{
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                pass
            })
        })

    }
    return (
        <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Name" 
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
          <input 
            type="email" 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
           />
           <br/>
          <input 
            type="password" 
            placeholder="Password"
            onChange={(e) => setPass(e.target.value)}
           />
           <br/>
           <input type="submit" value="Register" />
        </form>
      </div>
    )
}

export default Register
