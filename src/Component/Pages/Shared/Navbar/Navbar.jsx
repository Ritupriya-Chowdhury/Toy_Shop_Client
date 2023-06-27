import { Link } from "react-router-dom";
import Logo from '../../../../assets/siteLogo2.png';
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";



const Navbar = () => {

    const { user, SignOut } = useContext(AuthContext);
    
   

    const handleSignOut = () => {
        SignOut()
            .then(

        )
            .catch(error => console.error(error.message))

    }


    return (
        <div className="navbar bg-base-100 mb-20">
            <div className="navbar-start">
                <div className="dropdown mt-8">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden text-blue-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl font-bold text-blue-800">
                        <li ><Link to='/' >Home</Link></li>
                        <li><Link to='/allToys'>All Toys</Link></li>
                        <div className="">
                        <li><Link to='/myToys'>My Toys</Link></li>
                        <li><Link to='/add'>Add A Toy</Link></li>
                        </div>:<></>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="btn btn-ghost normal-case text-xl">
                    <div>
                        <Link to='/about'>
                            <img src={Logo} alt="" className="w-12 h-12 mx-auto" />
                        </Link>
                        <p className='text-xl font-bold text-blue-800 italic'>Japanese Manga Anime Toys Shop</p>
                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex mt-8">

                <ul tabIndex={0} className="menu menu-horizontal px-1 text-xl font-bold text-blue-800">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allToys'>All Toys</Link></li>
                    
                        <div className="flex"><li><Link to='/myToys'>My Toys</Link></li>
                        <li><Link to='/add'>Add A Toy</Link></li></div>
                        
                        
                    
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>

            </div>
            {
                user ?
                    <div className="dropdown dropdown-end ml-auto mt-8">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} />
                            </div>
                        </label>

                        <button tabIndex={0} className="shadow menu menu-compact dropdown-content" onClick={handleSignOut}>

                            <li className='text-xl  font-bold  text-center w-32 rounded mt-2 md:mt-2 py-2 text-blue-800'  >Logout</li>
                        </button>

                    </div> :
                    <ul className="  text-xl font-bold text-blue-800 mt-8 ml-auto md:mx-auto">
                        <Link to='/login' >Login</Link>
                    </ul>
            }


        </div>
    );
};

export default Navbar;