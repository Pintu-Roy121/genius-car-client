import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                toast.success('Registered successful');
                navigate('/')
                form.reset()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero my-32 w-full">
            <div className="hero-content grid md:grid-cols-2 gap-44 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Sing Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name:</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password:</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />

                        </div>
                        {
                            error ?
                                <p className='text-lg text-red-600 font-semibold'>{error}</p>
                                :
                                ""
                        }
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already Hava an Account? <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;