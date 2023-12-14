import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navItems = <>

        <li className="text-3xl"><Link to="/">Home</Link> </li>
        <li className="text-3xl"><Link to="/foods">All Foods</Link></li>
        <li className="text-3xl"><Link to="/blog">Blog</Link></li>
        <li className="text-3xl"> <Link to="/about">About</Link> </li>

    </>


    return (
        <>
            <div className="navbar bg-gray-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 ">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="w-20 lg:w-24 -ml-4 h-fit" to='/'><img src="../../../public/logo.png" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">

                    <div className="dropdown dropdown-end ">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" rounded-full text-4xl flex justify-center items-center">
                                <FaRegCircleUser />

                            </div>
                        </label>
                        <div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/profile'>Profile</Link></li>
                                {
                                    user ? <li><Link onClick={logOut} to='/logIn'>LogOut</Link></li> : <li><Link to='/logIn'>LogIn</Link></li>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;