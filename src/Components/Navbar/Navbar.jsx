import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg';
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user , logOut} = useContext(AuthContext)
    const handleSignOut = () => {
        swal({
            title: "Are you sure you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                logOut()
                .then(() => {
                    swal("Log Out", "successful", "success")
                })
                .catch(error => {
                    console.log(error);
                })
            }
          });
    }
    return (
        <div className="navbar bg-purple-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-xl font-medium mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/myBookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        My Bookings
                    </NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img className="w-2/3" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-xl font-medium px-1">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink></li>
                    <li><NavLink
                        to="/myBookings"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        My Bookings
                    </NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
            <ul className="text-xl flex items-center font-bold">
                        {
                            user ? <div className="dropdown dropdown-end">
                                <label tabIndex={0} >
                                    <div className="avatar cursor-pointer">
                                        <div className="w-11 rounded-full ring ring-purple-500 ring-offset-base-100 ring-offset-2">
                                            {
                                                user?.photoURL ?
                                                    <img src={user.photoURL} /> :
                                                    <img className="bg-purple-500 text-white" />
                                            }
                                        </div>
                                    </div>
                                </label>
                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-3 shadow space-y-2 min-w-[150px] bg-base-100 rounded-box px-4">
                                    <li>{user.displayName}</li>
                                    <li >{user.email}</li>
                                    <hr />
                                    <button onClick={handleSignOut} className="text-xl border-black border-2 p-1 bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg text-left">Log out</button>
                                </ul>
                            </div> :
                                <li><NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "bg-purple-500 text-white rounded px-4 py-2" : ""
                                    }
                                >
                                    Login
                                </NavLink></li>
                        }
                    </ul>
            </div>
        </div>
    );
};

export default Navbar;