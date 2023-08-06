import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { FaBook, FaPlus, FaRegCommentDots, FaShoppingBag, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // TODO: load data from the server have dynamic isAdmin based on Data
    // const isAdmin = true;

    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-slate-50 text-base-content">
                    {/* Sidebar content here */}
                    <div className='mx-auto mb-10'>
                        <Link to="/"><img style={{ width: '150px' }} src={logo} alt="" /></Link>
                    </div>

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/order"><FaShoppingBag />Order List</NavLink></li>
                            <li><NavLink to="/dashboard/addService"><FaPlus />Add Service</NavLink></li>
                            <li><NavLink to="/dashboard/manageService"><FaWallet />Manage Services</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers />All Users</NavLink></li>
                        </> : <>
                            <li><NavLink to="/dashboard/mybook"><FaShoppingCart />Book</NavLink></li>
                            <li><NavLink to="/dashboard/booking"><FaBook />Booking List</NavLink></li>
                            <li><NavLink to="/dashboard/review"><FaRegCommentDots />Review</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;