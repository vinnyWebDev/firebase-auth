import { useState, useEffect, Children } from 'react'
import { Navigate } from "react-router-dom"
import { auth, app } from "../Firebase"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { onAuthStateChanged, signOut } from "firebase/auth";



const Protected = (children) => {
    const [authenticatedUser, setAuthenticatedUser] = useState("");

    useEffect(() => {
        //listener which checks if user is signed in or not
        const listenAuth = onAuthStateChanged(auth, (user) => {
            //if user exists set current user to user
            if (user) {
                setAuthenticatedUser(user)
            } else {
                setAuthenticatedUser(null)
            }
        })
        return () => {
            listenAuth();
        }
    }, [])

    //sign out function
    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("user sign out")
        }).catch(error => console.log("error"))
    }


    if (authenticatedUser === null) {
        return <Navigate to="/signup" replace />
    } else {
        return children;
    }


}

export default Protected
