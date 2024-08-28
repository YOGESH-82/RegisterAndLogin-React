import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import '../Style/style.css';


const Home = () => {

    const navigate = useNavigate()

    const data = JSON.parse(localStorage.getItem("user"));


    const handleLogout = (e) => {
        localStorage.removeItem("loggedin");
        navigate("/")
    }

    return (
        <>
            {/* <h1>Home Page</h1>
            <h3>Welcome {data.fullName}</h3>
            
            <button onClick={handleLogout} type="button">
                Logout
            </button> */}

            <section>
                <div className="container-fluid">
                    <div className="row main-row justify-content-center">
                        <div className="col-12 text-white">

                            <div className="row mt-1">
                                <div className="col-12 regilogo">
                                    <img className="img-fluid" src={logo} alt="IMG" />
                                </div>
                            </div>

                            <h1 className="mt-5">Home Page</h1>
                            <h3 className="mt-5">Welcome {data.fullName}</h3>

                            <button className="btn1 mt-2" onClick={handleLogout} type="button">
                                Logout
                            </button>
                        </div>
                    </div>

                </div>
            </section>


        </>
    )
}

export default Home;