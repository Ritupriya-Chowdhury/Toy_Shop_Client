import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginLogo from '../../../assets/Images/tanjiro.png';
import { FaGoogle } from "react-icons/fa";
import { useRef, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const [error, setError] = useState('');
    const emailRef = useRef();



    const { signIn, signInWithGoogle, auth } = useContext(AuthContext);




    //  ...................Login user with email and password......................

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then(result => {
                const User = result.user;
                const loggedUser = {
                    email: User.email
                }

                console.log(loggedUser)
                navigate(from, { replace: true });
                // console.log(User);
                setError('');
                event.target.reset();
                // 


            })
            .catch(error => {
                setError(error.message);
            })

    }


    //Sign in with Google

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');

                navigate('/');
            })
            .catch(error => {
                setError(error.message);
            })


    }


    //   Handle Forgot Password
    const handleReset = () => {
        const email = emailRef.current.value;
        if (!email) {

            toast.success('Please Give Email!');
        }
        else {
            sendPasswordResetEmail(auth, email);
            console.log(auth);
        }

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginLogo} alt="" className='w-96 h-96' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div>
                                <p className="font-bold text-2xl text-center">Please Login!!!</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' ref={emailRef} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' />

                            </div>
                            <p className='text-red-400'>{error}</p>
                            <div className="form-control mt-6">
                                <input type='submit' className="btn btn-primary" value="Login"></input>
                            </div>
                        </form>
                        <p><small>Forgot Password? Please <button className='btn btn-link' onClick={handleReset}>Reset</button></small></p>
                        <div className="form-control mt-6 ">
                            <button className="btn btn-outline btn-primary pl-28 " onClick={handleGoogleSignIn}>Sign In with <p className='ml-2'><FaGoogle /></p>
                            </button>
                            <ToastContainer />
                        </div>
                        <div className=''>
                            <p className='text-center'>New to here? <Link to='/register' className='text-blue-800'>Register</Link></p>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;