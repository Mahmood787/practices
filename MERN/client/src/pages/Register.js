import { useState } from 'react';
import { useHistory } from 'react-router';

function Register() {
  const [name, setName] =useState('')
  const [email, setEamil] = useState('')
  const [pass, setPass] =useState('')
  const history = useHistory()

  async function handleSubmit (e) {
    e.preventDefault()
    const response = await fetch('http://localhost:1337/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				pass,
			}),
		})
    const data = response.json()
    if(data.status === 'ok'){
      history.push('/login')
    }
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
          onChange={(e) => setEamil(e.target.value)}
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
  );
}

export default Register 