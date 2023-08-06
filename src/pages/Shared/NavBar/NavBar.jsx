import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li><NavLink to="/" className='font-semibold'>Home</NavLink></li>
        <li><NavLink to="/gallery" className='font-semibold'>Gallery</NavLink></li>
        <li><NavLink to="/team" className='font-semibold'>Our Team</NavLink></li>
        <li><NavLink to="/dashboard" className='font-semibold'>Dashboard</NavLink></li>
        <li><NavLink to="/about" className='font-semibold'>About</NavLink></li>
        <li><NavLink to="/contact" className='font-semibold'>Contact Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-orange-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <div>
                    <img style={{ width: '100px' }} src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <>
                    <img style={{ height: '2rem', borderRadius: '30px' }} title={user?.displayName} src={user.photoURL} alt="" />
                    <button onClick={handleLogOut} className='font-bold ml-1 text-white btn btn-sm px-4 bg-[#F63E7B]'>LogOut</button>
                </> : <>
                    <Link to="/login" className='font-bold ml-1 text-white btn btn-sm px-4 bg-[#F63E7B]'>Login</Link>
                </>}
            </div>
        </div>
    );
};

export default NavBar;