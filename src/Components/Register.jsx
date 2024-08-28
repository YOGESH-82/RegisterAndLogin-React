import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';
import '../Style/style.css';

function Register() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    number: '',
    email: '',
    password: '',
    check: false,
    address: '',
    googleAddress: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    teamSize: '',
    selectedOption: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.companyName || !formData.number || !formData.email || !formData.password || !formData.check) {
        alert("Please fill in all fields for this step.");
        return false;
      }
    } else if (step === 2) {
      if (!formData.address || !formData.googleAddress || !formData.country || !formData.state || !formData.city || !formData.zipcode) {
        alert("Please fill in all fields for this step.");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSigninbtn = () => {
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.teamSize && formData.selectedOption) {
      localStorage.setItem("user", JSON.stringify(formData));
      navigate("/");
    } else {
      alert("Please fill in all fields for this step.");
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid h-100">
          <div className="row main-row">
            {/* left */}
            <div className="col-md-5 col-12">

              <div className="row">
                <div className="col-11">
                  <div className="row mt-1">
                    <div className="col-12 regilogo">
                      <img className="img-fluid" src={logo} alt="IMG" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5">
                <div className="col-md-11 col-12">

                  <form onSubmit={handleSubmit}>
                    {step === 1 && (
                      <>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon1">
                            <i className="fa fa-user icon"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            aria-label="FullName"
                            aria-describedby="basic-addon1"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon2">
                            <i className="fa fa-building icon"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Company Name"
                            aria-label="CompanyName"
                            aria-describedby="basic-addon2"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon3">
                            <i className="fa fa-phone icon"></i>
                          </span>
                          <input
                            type="number"
                            className="form-control"
                            name="number"
                            value={formData.number}
                            onChange={handleChange}
                            placeholder="Number"
                            aria-label="Number"
                            aria-describedby="basic-addon3"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <span className="input-group-text" id="basic-addon4">
                            <i className="fa fa-envelope icon"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            aria-label="Email"
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
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon5"
                          />
                        </div>

                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={formData.check}
                            onChange={handleChange}
                            id="flexCheckDefault"
                            name="check"
                          />
                          <label className="form-check-label letSpace " htmlFor="flexCheckDefault">
                            I have read and agree to <button className="btn-createA">Terms & Conditions</button>
                          </label>
                        </div>
                        <div>
                          <p className="letSpace">Already Register! <button className="btn-createA" onClick={handleSigninbtn} type="button">Sign in</button></p>
                        </div>
                        
                        <div>
                          <button type="button" className="letSpace btn1 mt-2" onClick={nextStep}>
                            Get Started
                          </button>
                        </div>
                      </>
                    )}
                    {step === 2 && (
                      <>
                       <button type="button" className="letSpace btn1 mb-4" onClick={prevStep}>
                            Back
                          </button>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="googleAddress"
                            value={formData.googleAddress}
                            onChange={handleChange}
                            placeholder="Google Address"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="State"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                            placeholder="Zipcode"
                          />
                        </div>
                        <div>
                         
                          <button type="button" className="letSpace btn1" onClick={nextStep}>
                            Next
                          </button>
                        </div>
                      </>
                    )}
                    {step === 3 && (
                      <>
                       <button type="button" className="letSpace btn1 mb-4" onClick={prevStep}>
                            Back
                          </button>
                        <div className="input-group mb-3">
                          <input
                            type="number"
                            className="form-control"
                            name="teamSize"
                            value={formData.teamSize}
                            onChange={handleChange}
                            placeholder="Team Size"
                          />
                        </div>
                        <div className="input-group mb-3">
                          <select
                            className="form-control"
                            name="selectedOption"
                            value={formData.selectedOption}
                            onChange={handleChange}
                          >
                            <option value="" disabled>Select an Option</option>
                            <option value="Sales Manager">Sales Manager</option>
                            <option value="Marketing / PR Manager">Marketing / PR Manager</option>
                            <option value="Customer Service Manager">Customer Service Manager</option>
                            <option value="CxO / General Manager">CxO / General Manager</option>
                            <option value="IT Manager">IT Manager</option>
                            <option value="Operations Manager">Operations Manager</option>
                            <option value="Developer / Software">Developer / Software</option>
                            <option value="Student / Personal">Student / Personal</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                         
                          <button type="submit" className="letSpace btn1">
                            Submit
                          </button>
                        </div>
                      </>
                    )}
                  </form>
                </div>
              </div>

            </div>


            {/* right */}
            <div className="col-md-7 col-12 regi-right-page1 d-sm-block d-none">
            </div>
          </div>


        </div>
      </section>













    </>
  );
}

export default Register;
