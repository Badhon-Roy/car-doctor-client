import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import swal from "sweetalert";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const [errorMassage, setErrorMassage] = useState(null)
    const location = useLocation()
    const navigate = useNavigate()

    const { googleSignIn, signIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                // const user = { email};
                // navigate(location?.state ? location.state : '/')
                swal("Log in", "successful", "success")
                // axios.post('http://localhost:5000/jwt' , user, {withCredentials: true})
                // .then(res =>{
                //     console.log(res.data);
                // })
                // e.target.reset();
            })
            .catch(() => {
                setErrorMassage('login failed please check your email and password and try again');
            })


    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user);
                navigate(location?.state ? location.state : '/')
                swal("Log in", "successful", "success")
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <img src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-3xl font-bold text-center mb-3">Login now!</h2>
                        <hr />
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
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    {
                        errorMassage && <p className="text-red-500">{errorMassage}</p>
                    }
                    <button onClick={handleGoogleLogin} className="btn btn-secondary btn-sm">continue with Google</button>
                    <p className="mb-4 text-center">Do not have an account <span className="text-[#FF3811] font-bold underline"> <Link to="/signUp">Sign Up</Link></span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;