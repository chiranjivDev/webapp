import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const LoginScreen = () => {
    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if(!username || !password){
            console.log('provide username and password')
        }else{
            console.log(`Welcome, ${username}!`);
            navigate('/profile');
        }
      
    }

    return (
        <form onSubmit={submitHandler} className='form-login'>
            <h3 ><NavLink to='/' className='active-link'>Login</NavLink>  |  <NavLink to='/register' className='active-link'>Register</NavLink></h3>
            <div>
                <label htmlFor='username'>Username</label>
                <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button type='submit'>Login</button>
        </form> 
    )
}

export default LoginScreen;