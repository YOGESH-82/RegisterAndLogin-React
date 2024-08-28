import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import '../Style/style.css';

function Login() {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));

        if (loggedUser && input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem("loggedin", true);
            navigate("/home");
        } else {
            alert("Wrong email and password");
        }
    };

    const handleRegiBtn = () => {
        navigate("/register");
    };

    return (

        <>
            <section>
                <div className="container-fluid h-100">


                    <div className="row main-row">

                        {/* left */}
                        <div className="col-md-5 col-12">

                            <div className="row justify-content-center">
                                <div className="row mt-1">
                                    <div className="col-12 regilogo">
                                        <img className="img-fluid" src={logo} alt="IMG" />
                                    </div>
                                </div>

                                

                                <div>
                                    <div className="row justify-content-center">
                                        <div className="col-11 col-md-10 mt-5">
                                        <h4 className="text-white letSpace">Login</h4>
                                            <form className="mt-3" onSubmit={handleLogin}>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon4">
                                                        <i className="fa fa-envelope icon"></i>
                                                    </span>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        name="email"
                                                        id="email"
                                                        value={input.email}
                                                        onChange={handleChange}
                                                        placeholder="Email"
                                                        aria-label="email"
                                                        aria-describedby="basic-addon4"
                                                    />
                                                </div>

                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon5">
                                                        <i className="fa fa-lock icon"></i>
                                                    </span>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        id="password"
                                                        value={input.password}
                                                        onChange={handleChange}
                                                        placeholder="Password"
                                                        aria-label="password"
                                                        aria-describedby="basic-addon5"
                                                    />
                                                </div>

                                                <div>
                                                    <button className=" btn-createA mb-4" type="button" >Forgot Password</button>
                                                </div>

                                                <div>
                                                    <button className="btn1 mb-3" type="submit">
                                                        Login
                                                    </button>
                                                </div>
                                                <div>
                                                   <span className="text-white letSpace">Don't have an account ?
                                                   <button className="ms-2 btn-createA" type="button" onClick={handleRegiBtn}>
                                                        Create Account!
                                                    </button>
                                                   </span>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* right */}
                        <div className="col-md-7 regi-right-page1 d-sm-block d-none"></div>
                    </div>
                </div>


            </section>

        </>

    );
}

export default Login;
