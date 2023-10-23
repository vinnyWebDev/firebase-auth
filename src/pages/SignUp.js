import React from 'react'
import { useState } from 'react';
import { auth, app } from "../Firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    //use state to get login credentials
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate("")


    //logic came from firebase
    const signUp = (e) => {
        //orevent default aciton of refreshign page
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //console.log(userCredential.user);
                navigate("/login")
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='container p-5'>
            <h3 className='mb-4'>Sign Up</h3>

            <form onSubmit={signUp}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control mb-3" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                </div>

                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </form>
        </div>
    )
}


export default SignUp
