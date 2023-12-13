import React, { useState } from 'react'
import './form.css'
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function Login() {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    //status for checking errors
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

    //handling the name
    const handlingName = (e) => {
        setName(e.target.value);
        setSubmit(false);
    }

    //handling the email
    const handlingEmail = (e) => {
        setEmail(e.target.value);
        setSubmit(false);
    }

    //handling the password
    const handlingPassword = (e) => {
        setPassword(e.target.value);
        setSubmit(false);
    }

    //handling the form submission
    let handlingSubmit = (e) => {
        // e.preventDefault();
        if (name === "" || email === "" || password === "") {
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
                <h3>{name} successfully loged in...</h3>
            </div>
        )
    }
    
    //showing error message
    const errorMessage = () => {
        return (
            <div className='error' style={{
                display: error ? "" : "none",
            }}>
                <h2>Fill All the Fields!!!</h2>
            </div>
        )
    }

    return (
        <>
            <div className='container-fluid bg-img'>
                <div className='container'>
                    <div className='log_in'>
                        <div className='header text-center'>
                            <h1>Login Form</h1>
                        </div>
                        <div className="messages">
                            {errorMessage()}
                            {successMessage()}
                        </div>
                        <div className='sign'>
                            <form onSubmit={handlingSubmit}>
                                <label className="label">User Name</label>
                                <input
                                    onChange={handlingName}
                                    className="input person"
                                    value={name}
                                    type="text"
                                    placeholder='Enter User Name'
                                    required
                                />
                                <label className="label">Email</label>
                                <input
                                    onChange={handlingEmail}
                                    className="input"
                                    value={email}
                                    type="email"
                                    placeholder='Enter Email Id'
                                    required
                                />
                                <label className="label">Password</label>
                                <input
                                    onChange={handlingPassword}
                                    className="input"
                                    value={password}
                                    type="password"
                                    placeholder='Enter Password'
                                    required
                                />
                                <button onClick={handlingSubmit} className="btn" type="submit"> Submit </button>
                                <p className='text-center'>Don't have Account? <Link to="./Register">Create New</Link></p>
                                <p className='text-center'>All the Best!!!....</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
