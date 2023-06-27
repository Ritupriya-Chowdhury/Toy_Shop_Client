import { Link, useNavigate } from 'react-router-dom';
import regLogo from '../../../assets/Images/shinobu.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Registration = () => {
    const navigate=useNavigate()
    const [error,setError]=useState('');


    const {createUser}=useContext(AuthContext);

    const updateUserData=(createdUser,name,photo)=>{
        updateProfile(createdUser,{
            displayName:name,
            photoURL:photo,
        })
        .then(()=>{
            console.log('user name updated');
        })
        .catch(error=>console.log(error))

    }

    const handleRegister =   (event) => {
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        
        const photo=form.photo.value;

        
        
         createUser(email,password)
            .then(result=>{
              const createdUser=result.user;
              console.log(createdUser);
              updateUserData(createdUser,name,photo);
              setError('');
              form.reset();
              navigate('/login');
    
    
            })
            .catch(error=>{
                setError(error.message)
              })
           
        
        console.log(name,photo);
        
       
       


    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={regLogo} alt="" className='w-96 h-96' />

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div>
                                <p className="font-bold text-2xl text-center">Register Account!!!</p>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" name='name' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name='password' required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload A Photo</span>
                                </label>
                              
                               <input type="text" placeholder="Pest a Photo Link" className="input input-bordered  py-2" name='photo' required />
                        

                            </div>
                            <p className='text-red-400'>{error}</p>
                            <div className="form-control mt-6">
                                <input type='submit' value='Register' className="btn btn-primary" />
                            </div>
                            </form>

                            <div className=''>
                                <p className='text-center'>Have An Account? <Link to='/login' className='text-blue-800'>Sign Up</Link></p>



                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;