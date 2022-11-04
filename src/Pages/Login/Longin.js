import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/images/login/login.svg'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const Longin = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset('')

                const currentUser = {
                    email: user.email
                }
                // console.log(currentUser);
                // get jwt tocker............
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        //Local storeage is the easiest but not the best place to set the jwt tocken
                        localStorage.setItem('genius-Token', data.token);
                        navigate(from, { replace: true })
                        console.log(data)
                    })
                toast.success('successfully Login')
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero my-32 w-full">
            <div className="hero-content grid md:grid-cols-2 gap-44 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 py-8">
                    <h1 className="text-5xl text-center font-bold">Login:</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email:</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password:</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6 text-center">
                            <input className="btn btn-primary" type="submit" value="Log in" />
                            <div className='flex text-2xl mx-auto my-5 gap-5' >
                                <p className='bg-gray-300 p-2 rounded-full'> <FcGoogle /></p>
                                <p className='bg-gray-300 p-2 rounded-full text-blue-900'><FaFacebookF /></p>
                                <p className='bg-gray-300 p-2 rounded-full text-blue-600'><FaLinkedinIn /></p>
                            </div>
                        </div>
                        <p className='text-center'>Do Not Have an Accout? <Link className='font-bold text-orange-600' to='/signup'>SignUp</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Longin;