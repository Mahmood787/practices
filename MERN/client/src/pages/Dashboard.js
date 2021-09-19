import jwt from 'jsonwebtoken';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const Dashboard = () => {
    const history = useHistory()

    const populateQuote = async() => {
        const data = await fetch('http://localhost:1337/api/quote',{
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        console.log(data, 'data from /api/quote')
    }
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login');
            } else {
                populateQuote()
            }
        }
        
    },[])
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}

export default Dashboard
