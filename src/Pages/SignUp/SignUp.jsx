import { Link, useNavigate } from "react-router-dom";
import signUp from "../../assets/images/login/login.svg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";

const SignUp = () => {
    const { createUser, userProfile } = useContext(AuthContext)
    const [errorMassage, setErrorMassage] = useState('')
    const navigate = useNavigate()
    const handleSignUp = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name , email , password);
        if (password.length < 6) {
            setErrorMassage("Password must be at least 6 characters");
            return;
        }
        else if (!/^(?=.*[a-z]).*$/.test(password)) {
            setErrorMassage("Password must have at least one Lowercase Character.");
            return;
        }
        else if (! /^(?=.*[A-Z]).*$/.test(password)) {
            setErrorMassage("Password must have at least one Uppercase Character.")
            return;
        }
        else if (! /^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test(password)) {
            setErrorMassage("Password must contain at least one Special Symbol.")
            return;
        }
        else {
            setErrorMassage('');
        }

        createUser(email, password)
            .then(res => {
                userProfile(name)
                    .then(res => {
                        console.log(res.user);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                swal("Good job", "Register successful", "success").then(() => {
                    window.location.reload();

                })
            })
            .catch(error => {
                setErrorMassage(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={signUp} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-3">Please Sign Up</h2>
                        <hr />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sing up" />
                        </div>
                    </form>
                    {
                        errorMassage && <p className="text-red-500">{errorMassage}</p>
                    }
                    <p className="mb-4 text-center">Have an account <span className="text-[#FF3811] font-bold underline"> <Link to="/login">Login</Link></span> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;