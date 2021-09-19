import { useEffect } from "react"

const Signin = () => {
    
    const [email, setEmail] = useEffect('');
    const [pass, setPass] = useEffect('');

    return (
        <div>
            <h1>Signin</h1>
            <br />
            <form >
                <input 
                    type="email"
                     placeholder="Email" 
                     onChange={(e) => setEmail(e.target.value)}
                     />
                <br />
                <input 
                    type="password"
                     placeholder="Password" 
                     onChange={(e) => setPass(e.target.value)}
                     />
                <br />
                <input type="submit" value="Signin" />
            </form>
        </div>
    )
}

export default Signin
