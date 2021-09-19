
import { useState } from 'react';

function Login() {
  const [email, setEamil] = useState('')
  const [pass, setPass] =useState('')

  async function handleSubmit (e) {
    e.preventDefault()
    const response = await fetch('http://localhost:1337/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				
				email,
				pass,
			}),
		})
        const data = await response.json()
        if(data.user){
          alert('Login successful')
          window.location.href = '/dashboard'
        } else {
          alert('Please check your username and password')
        }
    
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
       
        <br/>
        <input 
          type="email" 
          placeholder="Email"
          onChange={(e) => setEamil(e.target.value)}
         />
         <br/>
        <input 
          type="password" 
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
         />
         <br/>
         <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
