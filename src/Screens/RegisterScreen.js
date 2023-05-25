import { NavLink } from "react-router-dom";
const RegisterScreen = () => {
    return (
        <>
        <form className="form-registration">
            <h3 ><NavLink to='/' className='active-link'>Login</NavLink>  |  <NavLink to='/register' className='active-link'>Register</NavLink></h3>
            <div>
                <label htmlFor='username'>Username</label>
                <input type='text' />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type='password'  />
            </div>
            <div>
                <label htmlFor='password'>Confirm Password</label>
                <input type='password' />
            </div>
            <button type='submit'>Register</button>
        </form> 
        </>
    )
};

export default RegisterScreen;