import { NavLink } from "react-router-dom";

const Navbar = ()  => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src='' alt='Logo'/>
            </div>
            <nav>
                <ul>
                    <NavLink to='/'>
                        <li>Login</li>
                    </NavLink>
                    <NavLink to='/register'>
                        <li>Register</li>
                    </NavLink>
                    <NavLink to='/profile'>
                        <li>Profile</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
};

export default Navbar;