import React, { useState } from 'react'
import './form.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Register() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumber] = useState('');
    const [conpassword, setConpassword] = useState('');

    //submit and error
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

    //handling fname 
    const handlingFname = (e) => {
        setFname(e.target.value);
        setSubmit(false);
    }

    //handling Lname
    const handlingLname = (e) => {
        setLname(e.target.value);
        setSubmit(false);
    }

    //handling email
    const handlingEmail = (e) => {
        setEmail(e.target.value);
        setSubmit(false);
    }

    //handling number
    const handlingNumber = (e) => {
        setNumber(e.target.value);
        setSubmit(false);
    }

    //handling password
    const handlingPassword = (e) => {
        setPassword(e.target.value);
        setSubmit(false);
    }

    //handling confirm password
    const handlingConpassword = (e) => {
        setConpassword(e.target.value);
        setSubmit(false);
    }

    //handling the form submission
    let handlingSubmit = (e) => {
        // e.preventDefault();
        if (fname === "" || email === "" || password === "" || lname === "" || number === "" || conpassword === "") {
            setError(true);
        } else {
            setSubmit(true);
            setError(false);
        }
    }

    //showing Success message
    const successMessage = () => {
        return (

            <div className='success' style={{
                display: submit ? "" : "none",
            }}>
                <h3>successfully Registered to CareerX...</h3>
            </div>
        )
    }

    //showing error message
    const errorMessage = () => {
        return (
            <div className='error' style={{
                display: error ? "" : "none",
            }}>
                <h2>Please Fill All the Fields!!!</h2>
            </div>
        )
    }

    return (
        <>
            <div className='container-fluid register'>
                <div className='row'>
                    <div className='col-12 col-sm-12 col-md-5 side1'>
                        <div className='heading'>
                            <h1>Welcome to <span>CareerX.club</span></h1>
                            <p className='para'>Signup With Us... and full fill your Dreams</p>
                            <p className='para1'>Follow Us on...</p>
                            <div className='icons'>
                                <FaFacebookSquare className='icon' />
                                <FaSquareInstagram className='icon' />
                                <FaSquareGithub className='icon' />
                                <FaTwitterSquare className='icon' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-7 side2'>
                        <div className='reg'>
                            <div className='heading3 text-center' style={{ backgroundColor: 'bisque', color: 'orange' }}>
                                <h1>Registration Form</h1>
                            </div>
                            <div className="messages">
                                {errorMessage()}
                                {successMessage()}
                            </div>
                            <div class="content">
                                <form onSubmit={handlingSubmit}>
                                    <div class="user-details">
                                        <div class="input-box">
                                            <span class="details">First Name</span>
                                            <input type="text" placeholder="Enter your Firstname" required onChange={handlingFname} value={fname} />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Last Name</span>
                                            <input type="text" placeholder="Enter your Lastname" required onChange={handlingLname} value={lname} />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Email</span>
                                            <input type="email" placeholder="Enter your email" required onChange={handlingEmail} value={email} />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Phone Number</span>
                                            <input type="number" placeholder="Enter your number" required onChange={handlingNumber} value={number} />
                                            <span className='confirm1'></span>
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Password</span>
                                            <input type="password" placeholder="Enter your password" required onChange={handlingPassword} value={password} />
                                        </div>
                                        <div class="input-box">
                                            <span class="details">Confirm Password</span>
                                            <input type="password" placeholder="Confirm your password" required onChange={handlingConpassword} value={conpassword} />
                                            <span className='confirm'></span>
                                        </div>
                                    </div>
                                    <div class="gender-details">
                                        <input type="radio" name="gender" id="dot-1" />
                                        <input type="radio" name="gender" id="dot-2" />
                                        <input type="radio" name="gender" id="dot-3" />
                                        <span class="gender-title">Gender</span>
                                        <div class="category">
                                            <label for="dot-1">
                                                <span class="dot one"></span>
                                                <span class="gender">Male</span>
                                            </label>
                                            <label for="dot-2">
                                                <span class="dot two"></span>
                                                <span class="gender">Female</span>
                                            </label>
                                            <label for="dot-3">
                                                <span class="dot three"></span>
                                                <span class="gender">Prefer not to say</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="button">
                                        <input type="submit" value="Register" onClick={handlingSubmit} />
                                    </div>
                                </form>
                            </div>
                            <div className='account text-center'>
                                <p className='text-center'>Already have Account?Please <Link to="/">Log In</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Register
